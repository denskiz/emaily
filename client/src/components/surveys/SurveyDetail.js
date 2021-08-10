import { Pie } from "react-chartjs-2";

const SurveyDetail = ({ onReturnClick, currentSurvey }) => {
  function renderChart() {
    if (!currentSurvey.yes && !currentSurvey.no) {
      return (
        <>
          <label>Survey Results</label>
          <p>No Results available</p>
        </>
      );
    } else {
      return (
        <Pie
          data={{
            labels: [`Yes`, `No`],
            datasets: [
              {
                label: "Survey Responses",
                data: [currentSurvey.yes, currentSurvey.no],
                backgroundColor: [
                  "rgba(0, 200, 83, 0.8)",
                  "rgba(213, 0, 0, 0.8)",
                ],
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Survey Results ",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      );
    }
  }

  function renderSurveyDetailsCard() {
    return (
      <div className="card">
        <div className="card-header">
          <div>Survey Details</div>
          <div className="text-end">
            Posted On: {""}
            {new Date(currentSurvey.dateSent).toLocaleDateString()}{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">{currentSurvey.title}</p>
              <h5 className="card-title">Subject</h5>
              <p className="card-text">{currentSurvey.subject}</p>
              <h5 className="card-title">Body</h5>
              <p className="card-text">{currentSurvey.body}</p>
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  onReturnClick();
                }}
              >
                Return
              </button>
            </div>
          </div>
          <div className="col-md-2">{renderChart()}</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="section section-posts grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12">{renderSurveyDetailsCard()}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SurveyDetail;
