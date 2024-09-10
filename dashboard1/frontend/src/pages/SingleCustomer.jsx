import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import SearchModal from "../components/SearchModal";
import "./SingleCustomer.css";
import PageHeaders from "../components/PageHeaders";
import { FaAngleRight } from "react-icons/fa";

const SingleCustomer = () => {
  const [showMore, setShowMore] = useState(false);

  const listItems = [
    "Details",
    "Savings Accounts",
    "Shares Accounts",
    "Loan Sacco",
    "Fixed Deposits",
    "Ings Accounts",
    "Shares Accounts",
    "Recurring Deposits",
    "Fixed Deposits",
    "Other Details",
  ];

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="dashboard single-user">
      <DashboardNavbar />
      <DashboardSidebar />

      <div className="main journal">
        <p className="empty"></p>
        <div className="journal-container">
          <PageHeaders
            pageTitle={"Test client"}
            pageWork={"Dashboard | Clients"}
            mainAction={"Edit Client Details"}
          />

          <ul className="header-ul">
            {!showMore &&
              listItems
                .slice(0, 4)
                .map((item, index) => <li key={index}>{item}</li>)}

            {showMore &&
              listItems
                .slice(4)
                .map((item, index) => <li key={index + 4}>{item}</li>)}

            <span onClick={toggleShowMore} className="toggle-button">
              <FaAngleRight />
            </span>
          </ul>

          <div className="grid profile">
            <div className="col">
              <div className="profile-wrapper">
                <div className="custom-profile">TC</div>
                <p>test client</p>
                <p>Branch: Rosema</p>
              </div>
            </div>
            <div className="col">
              <p className="sub-header">Client Info</p>
              <div className="row">
                <p>Account No</p>
                <p>0000079</p>
              </div>
              <div className="row">
                <p>Account No</p>
                <p>0000079</p>
              </div>
              <div className="row">
                <p>Account No</p>
                <p>0000079</p>
              </div>
              <div className="row">
                <p>Account No</p>
                <p>0000079</p>
              </div>
              <div className="row">
                <p>Account No</p>
                <p>0000079</p>
              </div>
              <div className="row">
                <p>Account No</p>
                <p>0000079</p>
              </div>
              <div className="row">
                <p>Account No</p>
                <p>0000079</p>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      <SearchModal />
    </div>
  );
};

export default SingleCustomer;
