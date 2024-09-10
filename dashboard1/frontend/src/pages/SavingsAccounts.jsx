import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import EntriesComponent from "../components/EntriesComponent";

const SavingsAccounts = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">SAVINGS ACCOUNT</p>
          <EntriesComponent />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default SavingsAccounts;
