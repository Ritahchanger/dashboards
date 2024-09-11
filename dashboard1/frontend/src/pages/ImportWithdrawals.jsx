import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import PageHeaders from "../components/PageHeaders";

const ImportWIthdrawals = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">IMPORT WITHDRAWALS</p>
          <PageHeaders
            pageTitle={"Withdrawals Importation Wizard"}
            pageWork={"Dashboard | Clients' Withdrawals"}
            mainAction={"Download Template"}
            subAction={"Import Transactions File"}
          />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default ImportWIthdrawals;
