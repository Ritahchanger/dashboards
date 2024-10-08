import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import PageHeaders from "../components/PageHeaders";

import BranchesEntriesComponent from "../components/BranchesEntriesComponent";

const Branches = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">BRANCHES</p>
          <PageHeaders
            pageTitle={"All Branches"}
            pageWork={"Dashboard | Organization | Branches "}
            mainAction={"New Branch"}
            subAction={"Input"}
          />
          <BranchesEntriesComponent />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default Branches;
