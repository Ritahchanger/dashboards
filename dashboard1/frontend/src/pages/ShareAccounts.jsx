import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";
import PageHeaders from "../components/PageHeaders";
import EntriesComponent from "../components/EntriesComponent";

const ShareAccounts = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">SHARE ACCOUNTS</p>
          <PageHeaders
            pageTitle={"All Share Accounts"}
            pageWork={"Dashboard | Share accounts"}
            mainAction={"Import share purchases"}
          />
          <EntriesComponent />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default ShareAccounts;
