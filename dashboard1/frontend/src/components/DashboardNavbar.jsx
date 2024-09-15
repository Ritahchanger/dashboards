import "./DashboardNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faUniversity,
  faFileAlt,
  faUser,
  faInbox,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { showNavbar, hideNavbar } from "../Redux/Features/NavbarSlice";
import {
  showSearchModal,
  hideSearchModal,
} from "../Redux/Features/SearchModalSlice";
import { useState } from "react";
import CustomersSidebarData from "./CustomersSidebarData";

const DashboardNavbar = () => {
  const dispatch = useDispatch();

  const [customerSidebar, setCustomerSidebar] = useState(false);

  const displayNavbar = useSelector((state) => state.navbar.displayNavbar);
  const handleToggleNavbar = () => {
    displayNavbar ? dispatch(hideNavbar()) : dispatch(showNavbar());
  };

  const handleSearchInput = (event) => {
    const query = event.target.value;
    query ? dispatch(showSearchModal()) : dispatch(hideSearchModal());
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropDown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleCustomerSidebar = () => {
    setCustomerSidebar((prev) => !prev);
  };

  return (
    <nav className="navbar-dashboard">
      <button
        className="menu-icon"
        onClick={handleToggleNavbar}
        aria-label={displayNavbar ? "Close Navbar" : "Open Navbar"}
      >
        {displayNavbar ? "×" : "☰"}
      </button>

      <div className="logo">
        <a href="#" className="logo-text">
          fincore
        </a>
      </div>

      <div className="dashboard-navbar-icons">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleSearchInput}
          />
          <FaSearch />
        </div>

        {/* Navigation icons */}
        <div className="navbar-ease-navigation">
          <ul>
            <li className="mobile">
              <Link to="#" onClick={() => handleDropDown("admin")}>
                <FontAwesomeIcon icon={faUserShield} size="2x" />
              </Link>
              {openDropdown === "admin" && (
                <div className="drop-down-menu">
                  <ul>
                    <li>
                      <Link to="/fintec/system/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/fintec/admin/organization">Organization</Link>
                    </li>
                    <li>
                      <Link to="/fintec/admin/system">System</Link>
                    </li>
                    <li>
                      <Link to="/fintec/admin/products">Products</Link>
                    </li>
                    <li>
                      <Link to="/fintec/admin/externalservices">
                        External Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/fintec/admin/bulkimport">Bulk import</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="mobile">
              <Link to="#" onClick={() => handleDropDown("university")}>
                <FontAwesomeIcon icon={faUniversity} size="2x" />
              </Link>
              {openDropdown === "university" && (
                <div className="drop-down-menu">
                  <ul>
                    <li>
                      <Link to="/fintec/customers/list">Clients</Link>
                    </li>
                    <li>
                      <Link to="#">Groups</Link>
                    </li>
                    <li>
                      <Link to="#">Centers</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="mobile">
              <Link
                to="/fintec/reports/list"
                onClick={() => handleDropDown("file")}
              >
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </Link>
            </li>
            <li className="customers-drop-down" onClick={handleCustomerSidebar}>
              <Link to="#">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Link>
              <div
                className={`customers-sidebar ${
                  customerSidebar ? "active" : null
                }`}
              >
                <div className="customer-sidebar-header"></div>
                <div className="input-group">
                  <input type="text" placeholder="Search Names, Acc Numbers" />
                  <span>
                    <FaSearch />
                  </span>
                </div>
                <CustomersSidebarData />
              </div>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faInbox} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faBell} size="2x" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
