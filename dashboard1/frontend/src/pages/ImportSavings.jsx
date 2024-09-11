import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import PageHeaders from "../components/PageHeaders";

const ImportSavings = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">IMPORT SAVINGS</p>
          <PageHeaders
            pageTitle={"Savings Importation Wizard"}
            pageWork={"Dashboard | Client's Savings"}
            mainAction={"Import Loans"}
            subAction={"Import Transactions File"}
          />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default ImportSavings;
