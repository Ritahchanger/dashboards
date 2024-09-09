import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

const SavingsAccounts = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
      <p className="medium-header">SAVINGS ACCOUNT</p>
      </div>
    </div>
  );
};

export default SavingsAccounts;