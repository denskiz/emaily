import { Link } from "react-router-dom";
import "./Dashboard.css";
import Surveys from "./surveys/Surveys";

const Dashboard = () => {
  return (
    <div>
      <Surveys />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn btn-danger">
          <div>New Survey</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
