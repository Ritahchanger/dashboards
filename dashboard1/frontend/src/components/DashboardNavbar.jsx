import "./DashboardNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";

import { showNavbar, hideNavbar } from "../Redux/Features/NavbarSlice";

const DashboardNavbar = () => {
  const dispatch = useDispatch();

  const handleShowNavbar = () => {
    dispatch(showNavbar());
  };
  const handleHideNavbar = () => {
    dispatch(hideNavbar());
  };

  const displayNavbar = useSelector((state) => state.navbar.displayNavbar);
  return (
    <nav className={` navbar-dashboard `}>
      {!displayNavbar ? (
        <button className="menu-icon" onClick={handleShowNavbar}>
          &#9776;
        </button>
      ) : (
        <button className="menu-icon" onClick={handleHideNavbar}>
          &times;
        </button>
      )}
      <div className="logo">
        <a href="#" className="logo-text">
          Bankayo
        </a>
      </div>

      <div className="dashboard-navbar-icons">
        <div className="search-bar">
          <input type="text" name="search" id="" placeholder="Search" />
          <FaSearch />
        </div>
        <div className="navbar-ease-navigation">
          <ul>
            <li className="mobile">
              <Link>
                <FontAwesomeIcon icon={faUserShield} size="2x" />
              </Link>
            </li>
            <li className="mobile">
              <Link >
                {" "}
                <FontAwesomeIcon icon={faUniversity} size="2x" />
              </Link>
            </li>
            <li className="mobile">
              <Link>
                {" "}
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <FontAwesomeIcon icon={faInbox} size="2x" />
              </Link>
            </li>
            <li>
              <Link>
                {" "}
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
