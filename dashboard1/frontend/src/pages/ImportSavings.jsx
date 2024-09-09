import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

const ImportSavings = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
      <p className="medium-header">IMPORT SAVINGS</p>
      </div>
    </div>
  );
};

export default ImportSavings;
