import React, { useState } from "react";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";
import "../../Dashboard.css";
import SearchModal from "../../../components/SearchModal";
import PageHeaders from "../../../components/PageHeaders";
import AccountingCards from "../../../components/NavbarPagesComponents/AccountingCards";

const Accounting = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">ACCOUNTING</p>
          <PageHeaders
            pageTitle={"Accounting"}
            pageWork={"Dashboard | Accounting"}
          />
          <AccountingCards />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default Accounting;
