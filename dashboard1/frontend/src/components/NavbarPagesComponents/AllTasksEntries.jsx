import React from "react";
import { FaUpload, FaSearch, FaPrint } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrColumns } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

const AllTasksEntries = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleUploadClick = () => {
    const inputFile = document.getElementById("input-file");

    inputFile.click();
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
              <td>Client</td>
              <td>Savings Account</td>
              <td>Action Name</td>
              <td>Initiated By</td>
              <td>Made On</td>
              <td>Result</td>
              <td>Actions</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default AllTasksEntries;
