import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import DashboardOverview from "../components/DashboardOverview";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
        <p className="medium-header">DASHBOARD</p>
        <DashboardOverview />
      </div>
    </div>
  );
};

export default Dashboard;
