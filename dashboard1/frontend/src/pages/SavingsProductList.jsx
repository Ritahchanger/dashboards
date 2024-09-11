import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import "./JournalEntries.css";
import { FaUpload } from "react-icons/fa";

import SearchModal from "../components/SearchModal";

import SavingsProductsEntries from "../components/SavingsProducts";

import PageHeaders from "../components/PageHeaders";

const SavingsProductList = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">SAVINGS PRODUCT LIST</p>
          <PageHeaders
            pageTitle={"All savings Products"}
            pageWork={"Dashboard | Products | Savings Products"}
            mainAction={"New Savings Product"}
          />
          <SavingsProductsEntries />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default SavingsProductList;
