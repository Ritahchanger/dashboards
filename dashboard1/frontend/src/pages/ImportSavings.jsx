import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

const ImportSavings = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
      <p className="medium-header">IMPORT SAVINGS</p>
      </div>
      <SearchModal/>
    </div>
  );
};

export default ImportSavings;
