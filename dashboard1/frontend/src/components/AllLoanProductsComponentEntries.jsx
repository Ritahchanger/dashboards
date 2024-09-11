import React from "react";
import { FaUpload, FaSearch, FaPrint } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrColumns } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
const AllLoanProductsComponentEntries = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleUploadClick = () => {
    const inputFile = document.getElementById("input-file");
    inputFile.click();
  };

  const entries = [
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
    },
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
    },
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
    },
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
    },
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
    },
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
    },
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
    },
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
    },
    {
      productName: "Micro Business Loan",
      interestRate: "6 Per month",
      validFrom: "8-may-2025",
      expiryDate: "11-may-2026",
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
              <td>Product Name</td>
              <td>Interest Rate</td>
              <td>Can Topup</td>
              <td>Valid From</td>
              <td>Expiry Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{entry.productName}</td>
                <td>{entry.interestRate}</td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{entry.validFrom}</td>
                <td>{entry.expiryDate}</td>

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

export default AllLoanProductsComponentEntries;
