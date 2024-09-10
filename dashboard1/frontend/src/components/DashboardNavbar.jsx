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
              <Link to="#">
                <FontAwesomeIcon icon={faUserShield} size="2x" />
              </Link>
            </li>
            <li className="mobile">
              <Link to="#">
                <FontAwesomeIcon icon={faUniversity} size="2x" />
              </Link>
            </li>
            <li className="mobile">
              <Link to="#">
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Link>
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
