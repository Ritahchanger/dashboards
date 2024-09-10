import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

const ImportCustomers = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">

        <div className="journal-container">
          <p className="medium-header">IMPORT CUSTOMERS</p>

          <div className="row header">
            <div className="col">
              <p>Client Importation Wizard</p>
              <p>Dashboard | Import Clients</p>
              <button className="hero-btn">
                Import Clients File
              </button>
            </div>
            <div className="col">
              <button className="hero-btn">
                Download Template
              </button>
            </div>
          </div>

        </div>
      </div>
      <SearchModal/>
    </div>
  );
};

export default ImportCustomers;
