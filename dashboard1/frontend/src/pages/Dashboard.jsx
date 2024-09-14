import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import DashboardOverview from "../components/DashboardOverview";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import PageHeaders from "../components/PageHeaders";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
        <p className="medium-header">DASHBOARD</p>
        <PageHeaders
          pageTitle={"Overview"}
          pageWork={"Dashboard | Briefing"}
          mainAction={"Onboard A new Client"}
        />
        <DashboardOverview />
      </div>
      <SearchModal />
    </div>
  );
};

export default Dashboard;
