import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import "./JournalEntries.css";
import { FaUpload, FaSearch, FaPrint } from "react-icons/fa";

import SearchModal from "../components/SearchModal";

import EntriesComponent from "../components/EntriesComponent";

const JournalEntries = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">JOURNAL ENTRIES</p>
          <div className="row header">
            <div className="col">
              <p>Journal Entries</p>
              <p>Accounting</p>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <p>Import Journal Entries</p>
                </div>
                <div className="col">
                  <button className="hero-btn">
                    <span>
                      <FaUpload />
                    </span>
                    <span>Add Journal Entry</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="journal-header">
            <div className="grid">
              <div className="input-group">
                <input type="text" name="" id="" placeholder="Branch" />
              </div>
              <div className="input-group">
                <input type="text" name="" id="" placeholder="Account" />
              </div>
              <div className="input-group">
                <input type="date" name="" id="" placeholder="Start Date" />
              </div>
              <div className="input-group">
                <input type="date" name="" id="" placeholder="End Date" />
              </div>
            </div>
          </div>
          <EntriesComponent />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default JournalEntries;
