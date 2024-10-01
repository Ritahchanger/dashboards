import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";
import EntriesComponent from "../components/EntriesComponent";
import PageHeaders from "../components/PageHeaders";
import FilterTable from "../components/FilterTable/FilterTable";


const GroupsList = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">GROUPS LIST</p>
          <PageHeaders
            pageTitle={"Groups List"}
            pageWork={"Dashboard | Organization | Groups"}
            mainAction={"Import Journal Entries"}
            subAction={"Add Journal Entry"}
          />
          <EntriesComponent />
        </div>
      </div>
      <FilterTable />
      <SearchModal />
    </div>
  );
};

export default GroupsList;
