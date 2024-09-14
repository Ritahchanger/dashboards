import React from "react";
import { FaUpload, FaSearch, FaPrint } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrColumns } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import "./ReportsList.css";
const ReportsList = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleUploadClick = () => {
    const inputFile = document.getElementById("input-file");
    inputFile.click();
  };

  const entries = [
    {
      accountNo: "0000567",
      depositType: "Savings",
      clientName: "John Doe",
      status: "Active",
      accountBalance: "50,000.00",
      lastTransactionDate: "12 July 2024",
    },
    {
      accountNo: "0000568",
      depositType: "Current",
      clientName: "Jane Smith",
      status: "Active",
      accountBalance: "75,000.00",
      lastTransactionDate: "10 July 2024",
    },
    {
      accountNo: "0000569",
      depositType: "Savings",
      clientName: "Test Client",
      status: "Inactive",
      accountBalance: "10,000.00",
      lastTransactionDate: "05 July 2024",
    },
    {
      accountNo: "0000570",
      depositType: "Current",
      clientName: "Alice Brown",
      status: "Active",
      accountBalance: "100,000.00",
      lastTransactionDate: "02 July 2024",
    },
    {
      accountNo: "0000571",
      depositType: "Savings",
      clientName: "Bob Green",
      status: "Active",
      accountBalance: "20,000.00",
      lastTransactionDate: "01 July 2024",
    },
    {
      accountNo: "0000572",
      depositType: "Fixed Deposit",
      clientName: "Eve White",
      status: "Active",
      accountBalance: "250,000.00",
      lastTransactionDate: "28 June 2024",
    },
    {
      accountNo: "0000573",
      depositType: "Savings",
      clientName: "Chris Black",
      status: "Inactive",
      accountBalance: "30,000.00",
      lastTransactionDate: "25 June 2024",
    },
    {
      accountNo: "0000574",
      depositType: "Current",
      clientName: "Mike Blue",
      status: "Active",
      accountBalance: "45,000.00",
      lastTransactionDate: "20 June 2024",
    },
    {
      accountNo: "0000575",
      depositType: "Savings",
      clientName: "Sara Red",
      status: "Active",
      accountBalance: "35,000.00",
      lastTransactionDate: "18 June 2024",
    },
    {
      accountNo: "0000576",
      depositType: "Fixed Deposit",
      clientName: "Tom Grey",
      status: "Inactive",
      accountBalance: "500,000.00",
      lastTransactionDate: "15 June 2024",
    },
    {
      accountNo: "0000577",
      depositType: "Savings",
      clientName: "Nancy Yellow",
      status: "Active",
      accountBalance: "80,000.00",
      lastTransactionDate: "12 June 2024",
    },
    {
      accountNo: "0000578",
      depositType: "Current",
      clientName: "Mark Violet",
      status: "Active",
      accountBalance: "60,000.00",
      lastTransactionDate: "10 June 2024",
    },
    {
      accountNo: "0000579",
      depositType: "Savings",
      clientName: "Paul Orange",
      status: "Inactive",
      accountBalance: "25,000.00",
      lastTransactionDate: "08 June 2024",
    },
    {
      accountNo: "0000580",
      depositType: "Savings",
      clientName: "Linda Purple",
      status: "Active",
      accountBalance: "55,000.00",
      lastTransactionDate: "05 June 2024",
    },
    {
      accountNo: "0000581",
      depositType: "Current",
      clientName: "David Cyan",
      status: "Active",
      accountBalance: "90,000.00",
      lastTransactionDate: "02 June 2024",
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
              <td>Product Name</td>
              <td>Currency</td>
              <td>Accounting Type</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{entry.accountNo}</td>
                <td>{entry.depositType}</td>
                <td>{entry.clientName}</td>
                <td>
                  <div className="table-buttons">
                    <button className="small-navigation-btn">
                      <span>
                        <BiShow />
                      </span>
                    </button>
                    <button className="small-navigation-btn">
                      <span>
                        <FaEdit />
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

export default ReportsList;
