import React, { useState } from "react";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";
import "../../Dashboard.css";
import SearchModal from "../../../components/SearchModal";
import PageHeaders from "../../../components/PageHeaders";
import SystemCards from "../../../components/NavbarPagesComponents/SystemCards";
const System = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">SYSTEM</p>
          <PageHeaders
            pageTitle={"System"}
            pageWork={"Dashboard | Admin"}
            mainAction={"Download Template"}
            importName={"View All System"}
          />
          <SystemCards />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default System;
