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
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">LOAN APPLICATION</p>
          <PageHeaders
            pageTitle={"All Tasks"}
            pageWork={"Dashboard | Organization | Groups"}
            mainAction={"Import Journal Entries"}
            subAction={"Add Journal Entry"}
          />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default LoanApplication;
