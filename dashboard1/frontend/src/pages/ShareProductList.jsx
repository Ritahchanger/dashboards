import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import "./JournalEntries.css";
import { FaUpload } from "react-icons/fa";

import SearchModal from "../components/SearchModal";

import EntriesComponent from "../components/EntriesComponent";

const SharesProductList = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">Shares Products List</p>

          <EntriesComponent />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default SharesProductList;
