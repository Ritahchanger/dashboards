import React, { useState } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  faTachometerAlt,
  faChartLine,
  faBook,
  faUsers,
  faLayerGroup,
  faFileAlt,
  faPiggyBank,
  faWallet,
  faStoreAlt,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FaAngleRight } from "react-icons/fa";

const DashboardSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const displayNavbar = useSelector((state) => state.navbar.displayNavbar);

  return (
    <div className={`dashboard-sidebar ${displayNavbar ? "active" : null}`}>
      <div className="sidebar-links">
        <ul>
          <li>
            <NavLink
              to="/fintec/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faTachometerAlt} />
                </span>{" "}
                Dashboard
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("financials")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faChartLine} />
                </span>{" "}
                Financials
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "financials" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/reports/balance-sheet"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Balance Sheet
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reports/income-statement"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Income Statement
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="/fintec/journal-entries"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faBook} />
                </span>{" "}
                Journal Entries
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("customers")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faUsers} />
                </span>{" "}
                Customers
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "customers" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/fintec/customers/list"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Customer List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fintec/customers/add"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Add Customer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fintec/customers/import"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Import Customers
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("groups")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faLayerGroup} />
                </span>{" "}
                Groups
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "groups" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/fintec/groups/list"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Group List
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("loan-applications")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faFileAlt} />
                </span>{" "}
                Loan Applications
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "loan-applications" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/fintec/loan-applications"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Loan Applications
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fintec/loan-applications/import"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Import Loan Applications
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="/fintec/accounts/share"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faPiggyBank} />
                </span>{" "}
                Share Accounts
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("savings-accounts")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faWallet} />
                </span>{" "}
                Savings Accounts
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "savings-accounts" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/fintec/accounts/savings"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Savings Account
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fintec/savings-accounts/import"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Import Savings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fintec/savings-accounts/standing-instructions-history"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Standing Instructions Run History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fintec/savings-accounts/import-withdrawals"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Import Withdrawals
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("branches")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faStoreAlt} />
                </span>{" "}
                Branches
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "branches" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/fintec/branches"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Branches
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("loan-products")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faHandshake} />
                </span>
                Loan Products
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "loan-products" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/fintec/loan-products/list"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Loan Product List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fintec/loan-products/new"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Add New Loan Product
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("savings")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faHandshake} />
                </span>
                Savings
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "savings" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="#"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Savings Product List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Add New Savings
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => toggleDropdown("share-savings")}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <p>
                <span>
                  <FontAwesomeIcon icon={faHandshake} />
                </span>
                Shares Products
              </p>
              <p>
                <FaAngleRight />
              </p>
            </NavLink>
            <div
              className={`small-drop-down ${
                openDropdown === "share-savings" ? "open" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/fintec/shares/products/list"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Shares product List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fintec/shares/products/add/new"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Add New Share Product
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="contact-us">
        <p>Need Help?</p>
        <p>Reach Out To Us</p>
        <button className="hero-btn">Help Desk</button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
