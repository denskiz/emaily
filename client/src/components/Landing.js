import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="container text-center ">
        <div className="wrapper">
          <div className="hero">
            <h1 className="text-center">Emaily</h1>
            <h3>Get Feedback from your users faster</h3>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-6 ">
            <ul className="list-group">
              <li className="list-group-item">
                <h2>Instructions</h2>
              </li>
              <li className="list-group-item">
                Purchase Credits to create Surveys
              </li>
              <li className="list-group-item">
                Create Surveys with a title and a question
              </li>
              <li className="list-group-item">
                Enter a comma-separated list of the recipient email addresses.
              </li>
              <li className="list-group-item">
                Send the survey and await feedback. Each emailer campaign's
                response tally can be monitored in your user dashboard.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h4 className="text-center">Tech Stack</h4>
      <p className="text-center">This app was built with:</p>
    </>
  );
};

export default Landing;
