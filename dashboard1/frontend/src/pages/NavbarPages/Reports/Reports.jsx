import React, { useState } from "react";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";
import "../../Dashboard.css";
import SearchModal from "../../../components/SearchModal";
import PageHeaders from "../../../components/PageHeaders";
import ReportsList from "../../../components/NavbarPagesComponents/ReportsList";
import FilterTable from "../../../components/FilterTable/FilterTable";
const Reports = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">REPORTS</p>
          <PageHeaders
            pageTitle={"All Reports"}
            pageWork={"Dashboard | Reports"}
            mainAction={"Download Template"}
            importName={"View All Reports"}
          />
          <ReportsList />
        </div>
      </div>
      <FilterTable />
      <SearchModal />
    </div>
  );
};

export default Reports;
