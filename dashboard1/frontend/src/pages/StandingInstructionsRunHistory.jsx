import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

const StandingInstructionsRunHistory = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
        <p className="medium-header">STANDING INSTRUCTIONS RUN HISTORY</p>
      </div>
    </div>
  );
};

export default StandingInstructionsRunHistory;
