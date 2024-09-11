import React from "react";
import { FaUpload, FaSearch, FaPrint } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrColumns } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
const BranchesEntriesComponent = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleUploadClick = () => {
    const inputFile = document.getElementById("input-file");
    inputFile.click();
  };

  const entries = [
    {
      branchName: "Rosena",
      externalId: "null",
      parentBranch: "Head Office",
      hierachy: "null",
      openingDate: "9-4-2025",
    },
    {
      branchName: "Bangkok",
      externalId: "null",
      parentBranch: "Head Office",
      hierachy: "null",
      openingDate: "9-4-2026",
    },
    {
      branchName: "Beijin",
      externalId: "null",
      parentBranch: "Head Office",
      hierachy: "null",
      openingDate: "9-4-2026",
    },
    {
      branchName: "Newyork",
      externalId: "null",
      parentBranch: "Head Office",
      hierachy: "null",
      openingDate: "9-4-2026",
    },
    {
      branchName: "Mumbai",
      externalId: "null",
      parentBranch: "Head Office",
      hierachy: "null",
      openingDate: "9-4-2026",
    },
    {
      branchName: "New Delhi",
      externalId: "null",
      parentBranch: "Head Office",
      hierachy: "null",
      openingDate: "9-4-2026",
    },
    {
      branchName: "Chichago",
      externalId: "null",
      parentBranch: "Head Office",
      hierachy: "null",
      openingDate: "9-4-2026",
    },
    {
      branchName: "WorshingTon DC",
      externalId: "null",
      parentBranch: "Head Office",
      hierachy: "null",
      openingDate: "9-4-2026",
    },
  ];

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
                <input type="checkbox" />
              </td>
              <td>Branch Name</td>
              <td>External ID</td>
              <td>Parent Branch</td>
              <td>Hierachy</td>
              <td>Opening Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{entry.branchName}</td>
                <td>{entry.externalId}</td>
                <td>{entry.parentBranch}</td>
                <td>{entry.hierachy}</td>
                <td>{entry.openingDate}</td>

                <td>
                  <button className="small-navigation-btn">
                    <span>
                      <BiShow />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BranchesEntriesComponent;
