import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { hideSearchModal } from "../Redux/Features/SearchModalSlice";
import { FaSearch } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { IoFileTrayFull } from "react-icons/io5";
const SearchModal = () => {
  const dispatch = useDispatch();
  const displaySearchModal = useSelector(
    (state) => state.searchModal.displaySearchModal
  );
  const handleHideSearchModal = () => {
    dispatch(hideSearchModal());
  };

  const searchItems = [
    {
      title: "COMMON SHORTCUTS",
      items: [
        {
          item: "Clients",
          logo: <FaArrowsDownToPeople />,
        },
        {
          item: "Groups",
          logo: <MdGroups/>,
        },
      ],
    },
    {
      title: "CLIENT ACCOUNTS",
      items: [
        {
          item: "Savings Accounts",
          logo: <MdAccountBalance />,
        },
        {
          item: "Share Accounts",
          logo: <FaRegShareSquare/>,
        },
        {
          item: "Client Loans / Action Tray",
          logo: <IoFileTrayFull />,
        },
      ],
    },
    {
      title: "SYSTEM",
      items: [
        {
          item: "Change Password",
          logo: <RiLockPasswordFill />,
        },
        {
          item: "System Users",
          logo: <FaUser />,
        },
      ],
    },
    {
      title: "REPORTS",
      items: [
        {
          item: "Dashboard",
          logo: <MdDashboardCustomize />,
        },
        {
          item: "Reports",
          logo: <TbReportSearch/>,
        },
      ],
    },
  ];

  return (
    <div
      className={`modal search ${displaySearchModal ? "active" : ""}`}
      aria-hidden={!displaySearchModal}
    >
      <div className="modal-wrapper">
        <button className="close-icon" onClick={handleHideSearchModal}>
          &times;
        </button>
        <div className="modal-wrapper-container">
          <div className="modal-header">
            <div className="input-group">
              <input type="text" name="" id="" placeholder="Search..." />
              <span>
                <FaSearch />
              </span>
            </div>
          </div>
          <div className="modal-body">
            <div className="grid">
              {searchItems.map((item, index) => (
                <div className="col" key={index}>
                  <p className="medium-header">{item.title}</p>
                  {item.items.map((itemOfItems, index) => (
                    <p key={index} className="inner-header">
                      <span>{itemOfItems.logo}</span>
                      {itemOfItems.item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
