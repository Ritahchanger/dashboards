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

const DashboardNavbar = () => {
  const dispatch = useDispatch();

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
                      <Link to="#">Users</Link>
                    </li>
                    <li>
                      <Link to="#">Organization</Link>
                    </li>
                    <li>
                      <Link to="#">System</Link>
                    </li>
                    <li>
                      <Link to="#">Products</Link>
                    </li>
                    <li>
                      <Link to="#">External Services</Link>
                    </li>
                    <li>
                      <Link to="#">Bulk import</Link>
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
                      <Link to="#">Clients</Link>
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
              <Link to="#" onClick={() => handleDropDown("file")}>
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </Link>
            </li>
            <li className="customers-drop-down">
              <Link to="#">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Link>
              <div className="customers-sidebar">
                <div className="customer-sidebar-header"></div>
                <div className="input-group">
                  <input type="text" placeholder="Search Names, Acc Numbers" />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="profile-image">TC</div>
                    <div className="customer-details">
                      <p>Test client</p>
                      <p>834738534832492</p>
                    </div>
                  </div>
                  <p>5346734821</p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="profile-image">TC</div>
                    <div className="customer-details">
                      <p>Test client</p>
                      <p>834738534832492</p>
                    </div>
                  </div>
                  <p>5346734821</p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="profile-image">TC</div>
                    <div className="customer-details">
                      <p>Test client</p>
                      <p>834738534832492</p>
                    </div>
                  </div>
                  <p>5346734821</p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="profile-image">TC</div>
                    <div className="customer-details">
                      <p>Test client</p>
                      <p>834738534832492</p>
                    </div>
                  </div>
                  <p>5346734821</p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="profile-image">TC</div>
                    <div className="customer-details">
                      <p>Test client</p>
                      <p>834738534832492</p>
                    </div>
                  </div>
                  <p>5346734821</p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="profile-image">TC</div>
                    <div className="customer-details">
                      <p>Test client</p>
                      <p>834738534832492</p>
                    </div>
                  </div>
                  <p>5346734821</p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="profile-image">TC</div>
                    <div className="customer-details">
                      <p>Test client</p>
                      <p>834738534832492</p>
                    </div>
                  </div>
                  <p>5346734821</p>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="profile-image">TC</div>
                    <div className="customer-details">
                      <p>Test client</p>
                      <p>834738534832492</p>
                    </div>
                  </div>
                  <p>5346734821</p>
                </div>
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
