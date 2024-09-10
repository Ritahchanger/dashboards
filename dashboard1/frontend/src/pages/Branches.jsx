import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

const Branches = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
        <p className="medium-header">
            BRANCHES
        </p>
      </div>
      <SearchModal/>
    </div>
  );
};

export default Branches;
