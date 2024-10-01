import React from "react";
import { FaSearch, FaPrint } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrColumns } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";

import SwitchButton from "../InputsComponents/SwitchButton";

import icons from "../../icons";

import { showUpdateModal } from "../../Redux/Features/UpdateAccountSlice";

import { useSelector, useDispatch } from "react-redux";

import { showFilterTable } from "../../Redux/Features/FilterTableSlice";
const data = [
  {
    accountName: "CENTENARY BANK",
    accountCode: 34235263471,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "BARCLAYS BANK",
    accountCode: 87623481763,
    accountType: "LIABILITY",
    parentAccount: "CENTENARY BANK",
    usage: "SUMMARY",
  },
  {
    accountName: "EQUITY BANK",
    accountCode: 56574523212,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "STANDARD CHARTERED",
    accountCode: 43218764233,
    accountType: "EQUITY",
    parentAccount: "EQUITY BANK",
    usage: "SUMMARY",
  },
  {
    accountName: "ABSA BANK",
    accountCode: 12345768910,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "HSBC",
    accountCode: 98765432123,
    accountType: "LIABILITY",
    parentAccount: "BARCLAYS BANK",
    usage: "SUMMARY",
  },
  {
    accountName: "KCB BANK",
    accountCode: 76543219876,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "STANBIC BANK",
    accountCode: 23456789101,
    accountType: "LIABILITY",
    parentAccount: "KCB BANK",
    usage: "SUMMARY",
  },
  {
    accountName: "DTB BANK",
    accountCode: 90817263546,
    accountType: "EQUITY",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "CO-OPERATIVE BANK",
    accountCode: 10293847565,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "FNB BANK",
    accountCode: 56473829101,
    accountType: "LIABILITY",
    parentAccount: "CO-OPERATIVE BANK",
    usage: "SUMMARY",
  },
  {
    accountName: "UBA BANK",
    accountCode: 38475619283,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "BANK OF AFRICA",
    accountCode: 67584930210,
    accountType: "LIABILITY",
    parentAccount: "UBA BANK",
    usage: "SUMMARY",
  },
  {
    accountName: "BANK OF KIGALI",
    accountCode: 74839205673,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "NCBA BANK",
    accountCode: 20938475612,
    accountType: "EQUITY",
    parentAccount: "BANK OF KIGALI",
    usage: "SUMMARY",
  },
  {
    accountName: "CRDB BANK",
    accountCode: 10293845761,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "EXIM BANK",
    accountCode: 30485761920,
    accountType: "LIABILITY",
    parentAccount: "CRDB BANK",
    usage: "SUMMARY",
  },
  {
    accountName: "FIRST BANK",
    accountCode: 91028374652,
    accountType: "ASSET",
    parentAccount: "",
    usage: "DETAIL",
  },
  {
    accountName: "ACCESS BANK",
    accountCode: 34567192803,
    accountType: "LIABILITY",
    parentAccount: "FIRST BANK",
    usage: "SUMMARY",
  },
  {
    accountName: "ZENITH BANK",
    accountCode: 23894756190,
    accountType: "EQUITY",
    parentAccount: "",
    usage: "DETAIL",
  },
];
const ListedAccounts = () => {
  const dispatch = useDispatch();

  const handlePrint = () => {
    window.print();
  };

  const handleUploadClick = () => {
    const inputFile = document.getElementById("input-file");

    inputFile.click();
  };
  const handleFilterTableModel = (tableData) => {
    dispatch(showFilterTable(tableData));
  };
  const handleUpdateModalShowUp = () => {
    dispatch(showUpdateModal());
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
                handleFilterTableModel({ name: "dennis" });
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
              <td>Account Name</td>
              <td>Account Code</td>
              <td>Account Type</td>
              <td>Parent Account</td>
              <td>Manual Entries</td>
              <td>Disabled</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{item.accountName}</td>
                <td>{item.accountCode}</td>
                <td>{item.accountType}</td>
                <td>{item?.parentAccount}</td>
                <td>
                  <SwitchButton />
                </td>
                <td>
                  <SwitchButton />
                </td>
                <td>
                  <button
                    className="small-navigation-btn"
                    onClick={handleUpdateModalShowUp}
                  >
                    <span>{icons.editIcon}</span>
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

export default ListedAccounts;
