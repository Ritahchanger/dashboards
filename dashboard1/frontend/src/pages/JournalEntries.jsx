import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import "./JournalEntries.css";
import { FaUpload, FaSearch, FaPrint } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrColumns } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

import SearchModal from "../components/SearchModal";


const JournalEntries = () => {
 
  const [showFileInput, setShowFileInput] = useState(false);

  const handlePrint = () => {
    window.print(); 
  };

  const handleUploadClick = () => {
    const inputFile = document.getElementById("input-file");

    inputFile.click();
  };

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
          <div className="entries">
            <div className="table-header">
              <ul>
                <li>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="input-file"
                  ></input>
                  <button onClick={handleUploadClick}>
                    <FaUpload />
                  </button>
                </li>
                <li>
                  <button>
                    <FaSearch />
                  </button>
                </li>
                <li>
                  <button>
                    <IoIosCloudDownload />
                  </button>
                </li>
                <li>
                  <button onClick={handlePrint}>
                    <FaPrint />
                  </button>
                </li>
                <li>
                  <button>
                    <GrColumns />
                  </button>
                </li>
                <li>
                  <button>
                    <IoFilterSharp />
                  </button>
                </li>
              </ul>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>tx Date</td>
                    <td>Created Date</td>
                    <td>Created By</td>
                    <td>Entity</td>
                    <td>Entry Type</td>
                    <td>Account Name</td>
                    <td>Txn ID</td>
                    <td>Amount</td>
                    <td>Action</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <SearchModal/>
    </div>
  );
};

export default JournalEntries;
