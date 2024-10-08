import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import { FaEdit } from "react-icons/fa";
import { BiShow } from "react-icons/bi";

import "./customers_List.css";

import SearchModal from "../components/SearchModal";
import { Link, Navigate } from "react-router-dom";

import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";

import { useNavigate } from "react-router-dom";
import FilterTable from "../components/FilterTable/FilterTable";

// Sample customer data
const customers = [
  {
    accountNo: "84723423401",
    clientName: "Sarah Johnson",
    branch: "Downtown",
    externalId: "25001",
    phone: "01234567890",
    activationDate: "05-August-2023",
  },
  {
    accountNo: "76534120344",
    clientName: "David Lee",
    branch: "East Side",
    externalId: "34982",
    phone: "01345678901",
    activationDate: "20-July-2023",
  },
  {
    accountNo: "99847563422",
    clientName: "Linda Martinez",
    branch: "Westbrook",
    externalId: "45329",
    phone: "01456789012",
    activationDate: "10-June-2023",
  },
  {
    accountNo: "32984712345",
    clientName: "James Brown",
    branch: "Southport",
    externalId: "21345",
    phone: "01567890123",
    activationDate: "12-May-2023",
  },
  {
    accountNo: "57483029384",
    clientName: "Emily Clark",
    branch: "Riverside",
    externalId: "99210",
    phone: "01678901234",
    activationDate: "28-April-2023",
  },
  {
    accountNo: "48765321099",
    clientName: "Michael White",
    branch: "Greenfield",
    externalId: "12034",
    phone: "01789012345",
    activationDate: "15-March-2023",
  },
];

const CustomerList = () => {
  const navigate = useNavigate();
  const openSingleCustomer = () => {
    navigate("/fintec/customers/list/898458945");
  };
  return (
    <div className="dashboard customers">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">CUSTOMER LIST</p>
          <div className="row">
            <div className="col">
              <p>All Customers</p>
              <p>Customers</p>
            </div>
            <div className="col">
              <button className="hero-btn">Onboard A New Customer</button>
            </div>
          </div>

          <Tabs defaultActiveKey="1" className="tabs">
            <TabPane tab="All customers" key="1"></TabPane>
            <TabPane tab="Active customers" key="2"></TabPane>
            <TabPane tab="Inactive customers" key="3"></TabPane>
            <TabPane tab="New customers" key="4"></TabPane>
          </Tabs>

          {/* <ul className="header-ul">
            <li>All customers</li>
            <li>Active customers</li>
            <li>Inactive customers</li>
            <li>New customers</li>
          </ul> */}

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Account No</td>
                  <td>Client Name</td>
                  <td>Branch</td>
                  <td>External Id</td>
                  <td>Phone</td>
                  <td>Activation Date</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {/* Use map to dynamically render rows */}
                {customers.map((customer, index) => (
                  <tr key={index} onClick={openSingleCustomer}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{customer.accountNo}</td>
                    <td>{customer.clientName}</td>
                    <td>{customer.branch}</td>
                    <td>{customer.externalId}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.activationDate}</td>
                    <td>
                      <div className="table-buttons">
                        <Link
                          to={`/fintec/customers/list/${customer.accountNo}`}
                        >
                          <button>
                            <FaEdit />
                          </button>
                        </Link>
                        <Link
                          to={`/fintec/customers/list/${customer.accountNo}`}
                        >
                          <button>
                            <BiShow />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default CustomerList;
