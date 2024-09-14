import React, { useState } from "react";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";
import "../../Dashboard.css";
import SearchModal from "../../../components/SearchModal";
import PageHeaders from "../../../components/PageHeaders";
import OrganizationCards from "../../../components/NavbarPagesComponents/OrganisationCards";

const Organization = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">ORGANIZATION</p>
          <PageHeaders
            pageTitle={"All Organization"}
            pageWork={"Dashboard | Admin"}
            mainAction={"Download Template"}
            importName={"View All Organization"}
          />
          <OrganizationCards />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default Organization;
