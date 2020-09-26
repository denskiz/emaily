const _ = require('lodash');
const { Path } = require('path-parser');
// default node library that helps parse urls
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    // select - pass in an object with the properties that you want
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false
    });

    res.send(surveys);
  });
  // Route customers to a thank you page after they click yes/no
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    // The pattern of the variables we are trying to extract. p is an object
    const p = new Path('/api/surveys/:surveyId/:choice');

    // remove duplicate events

    // chain allows you to chain as many loadash helpers as you want
    // removes the tempory variables
    //remove the underscore and remove first argument of these helpers
    //.compact(events) etc
    _.chain(req.body)
      .map(({ email, url }) => {
        // Extract the path from the URL
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      // compact takes an array and removes any elements that are undefined
      .compact()
      // look at every element and remove any duplicates
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        // each survey has a tremendous amount ot recipiants. You are
        // downloading a lot of data. Need to
        // write code which is efficent - dont pull out an entire survey
        // only touch a small slice of data
        // Write a query to find not only the correct id but has a recipent
        // with this given email and has a responded property of false
        // updateOne finds a given search record, and updates the record with the
        // second object
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            // choice = yes or no
            // $inc means increment, by 1 to yes or no
            // [choice] is key interpolation
            $inc: { [choice]: 1 },
            // $ is the index
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }
          // execute the query
        ).exec();
      })
      .value();
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // transform comma seperted string  to array of objects
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));

    // there is a lot of things that could go wrong
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      // req.user is now stale, so use user model returned from the operation
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // app.post('/api/delete', requireLogin, async (req, res) => {
  //   console.log(req.body);
  // });
};
