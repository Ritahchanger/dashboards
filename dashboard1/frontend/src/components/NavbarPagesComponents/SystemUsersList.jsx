import React from "react";
import { FaUpload, FaSearch, FaPrint } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrColumns } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import "./ReportsList.css";

const SystemUserList = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleUploadClick = () => {
    const inputFile = document.getElementById("input-file");
    inputFile.click();
  };

  const users = [
    {
      username: "jdoe123",
      firstName: "John",
      lastName: "Doe",
      branch: "New York",
    },
    {
      username: "jsmith456",
      firstName: "Jane",
      lastName: "Smith",
      branch: "Los Angeles",
    },
    {
      username: "tclient789",
      firstName: "Test",
      lastName: "Client",
      branch: "Chicago",
    },
    {
      username: "abrown123",
      firstName: "Alice",
      lastName: "Brown",
      branch: "San Francisco",
    },
    {
      username: "bgreen456",
      firstName: "Bob",
      lastName: "Green",
      branch: "Seattle",
    },
    {
      username: "ewhite789",
      firstName: "Eve",
      lastName: "White",
      branch: "Houston",
    },
    {
      username: "cblack123",
      firstName: "Chris",
      lastName: "Black",
      branch: "Miami",
    },
    {
      username: "mblue456",
      firstName: "Mike",
      lastName: "Blue",
      branch: "Atlanta",
    },
    {
      username: "sred789",
      firstName: "Sara",
      lastName: "Red",
      branch: "Denver",
    },
    {
      username: "tgrey123",
      firstName: "Tom",
      lastName: "Grey",
      branch: "Boston",
    },
  ];

  return (
    <div className="entries reports">
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
              <td>Username</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Branch</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.branch}</td>
                <td>
                  <div className="table-buttons">
                    <button className="small-navigation-btn">
                      <span>
                        <BiShow />
                      </span>
                    </button>
                    <button className="small-navigation-btn">
                      <span>
                        <MdDelete />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemUserList;
