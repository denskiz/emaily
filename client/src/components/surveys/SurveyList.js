const SurveyList = ({ surveys, onDetailsClick }) => {
  function renderSurveys() {
    if (surveys.length > 0) {
      return surveys.map((item) => {
        return (
          <tr key={item._id} id={item._id}>
            <td>{item.title}</td>
            <td className="hide-on-small-only">{item.subject}</td>
            <td>{new Date(item.dateSent).toLocaleDateString()}</td>
            <td>
              <button
                className="btn btn-info"
                onClick={(e) => {
                  // targets the <tr id={item._id}>
                  onDetailsClick(e.target.parentNode.parentNode.id);
                }}
              >
                Details
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>No Surveys Available</td>
          <td />
          <td />
        </tr>
      );
    }
  }

  return (
    <>
      <h5 className="text-center bold">
        Displaying {surveys.length} {surveys.length > 1 ? "Surveys" : "Survey"}
      </h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col" className="hide-on-small-only">
              Subject
            </th>
            <th scope="col">Date Created</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <>{renderSurveys()}</>
        </tbody>
      </table>
    </>
  );
};

export default SurveyList;
