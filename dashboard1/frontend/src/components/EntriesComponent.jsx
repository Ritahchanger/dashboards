import React from "react";
import { FaUpload, FaSearch, FaPrint } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrColumns } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";

import { showFilterTable } from "../Redux/Features/FilterTableSlice";

const EntriesComponent = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleUploadClick = () => {
    const inputFile = document.getElementById("input-file");

    inputFile.click();
  };

  const dispatch = useDispatch();

  const handleShowFilterTable = (tableData) => {
    dispatch(showFilterTable(tableData));
  };

  return (
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
            <button
              onClick={() => {
                handleShowFilterTable({ name: "dennis" });
              }}
            >
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
  );
};

export default EntriesComponent;
