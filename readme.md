# Emaily

This App features user accounts and billing.
Pays for email credit via stripe

Passport, general helpers for handling auth in Express apps
Passport strategy, helpers for authenticating with one specific
method (email, password, Facebook)

## Technologies Used

The MERN Stack: React 17, Redux, Node, Express, MongoDB, ChartJS, Materalize CSS, Redux Form, SendGrid, Stripe

npm install react@17.0.0-rc.3 react-dom@17.0.0-rc.3

Google Oauth

https://console.developers.google.com/
click credentials
for development use:
http://localhost:5000
http://localhost:5000/auth/google/callback
Heroku severs use AWS so it routes traffic using a proxy

HTTP requests are stateless
You cant identfy who is making the requests

read video 37 Q and A

we are managing our authentication state using cookies

"client": "npm run start --prefix client"

- run within the client directory

Links on the client which is on 3000 must route to the server 5000 via a proxy

The App architecture with client and server on same domain allows us to
use cookies. Beacuse we use a proxy. Also no CORS issues
cookies are more secure than JSON web tokens

In production there is no proxy and a request to api/current_user
goes directly to server

environment variables in React
we have two files in src folder .env.development and .env.production
REACT_APP_STRIPE_KEY=pk_test_wd6JOemZHTRKYwKJiobuPppm

The express server just serves json
There are 3 endpoints:
auth endpoint /api/current_user which serves the user after google Oauth
/api/logout which logs the user out
/api/stripe which recieves a post request from the client with token data
we secure these routes with requireLogin.js

Clicking on send survey button calls an action creator which sends a post request
to /survey route
the redirect happens with withRouter Helper

in production make sure the webhook url is changed in sendgrid settings

MONGOOSE TIPS
google the query you want to make e.g.
"mongoose update document in subdocument collection"
stackoverflow

TO QUICKY TEST MONGO QUERYS
copy lines 1-12 in index.js

kill the server in the terminal then run "node"
paste in the copyied code hit enter
const Survey = mongoose.model('surveys')
Survey.find({}).then(console.log)

## Features to Add:

Next.js

Testing

Delete Surveys

Loading Spinner after clicking send survey.

Server Side Rendering

Code Splitting

Caching using redis
