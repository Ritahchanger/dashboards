import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import PageHeaders from "../components/PageHeaders";

import SearchModal from "../components/SearchModal";

const LoanApplication = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">LOAN APPLICATION</p>
          <PageHeaders
            pageTitle={"All Tasks"}
            pageWork={"Dashboard | Management | Tasks"}
            mainAction={"Import Loans"}
           
          />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default LoanApplication;
