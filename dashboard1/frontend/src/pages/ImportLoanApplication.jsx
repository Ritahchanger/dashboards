import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";
import PageHeaders from "../components/PageHeaders";

const ImportLoanApplication = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">IMPORT LOAN APPLICATIONS</p>

          <PageHeaders
            pageTitle={"Loans Importation Wizard"}
            pageWork={"Dashboard | Client's Loans"}
            mainAction={"Download Template"}
            importName={"Import Loans File"}
          />

        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default ImportLoanApplication;
