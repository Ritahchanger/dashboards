import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

const ImportWIthdrawals = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
        <p className="medium-header">
            IMPORT WITHDRAWALS
        </p>

      </div>
    </div>
  );
};

export default ImportWIthdrawals;
