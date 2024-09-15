import React, { useState } from "react";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";
import "../../Dashboard.css";
import SearchModal from "../../../components/SearchModal";
import PageHeaders from "../../../components/PageHeaders";
import ExternalServicesCards from "../../../components/NavbarPagesComponents/ExternalServicesCards";

const ExternalServices = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">EXTERNAL SERVICES</p>
          <PageHeaders
            pageTitle={"External Services"}
            pageWork={"Dashboard | Admin"}
            mainAction={"Download Template"}
            importName={"View All ExternalServices"}
          />
          <ExternalServicesCards />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default ExternalServices;
