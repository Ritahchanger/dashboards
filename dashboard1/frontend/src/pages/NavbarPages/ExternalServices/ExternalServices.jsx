import React, { useState } from "react";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";
import "../../Dashboard.css";
import SearchModal from "../../../components/SearchModal";
import PageHeaders from "../../../components/PageHeaders";
import OrganizationCards from "../../../components/NavbarPagesComponents/OrganisationCards";

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
            pageTitle={"All ExternalServices"}
            pageWork={"Dashboard | Admin"}
            mainAction={"Download Template"}
            importName={"View All ExternalServices"}
          />
          <OrganizationCards />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default ExternalServices;
