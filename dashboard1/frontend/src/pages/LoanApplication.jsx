import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

const LoanApplication = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
        <p className="medium-header">LOAN APPLICATION</p>
      </div>
      <SearchModal />
    </div>
  );
};

export default LoanApplication;
