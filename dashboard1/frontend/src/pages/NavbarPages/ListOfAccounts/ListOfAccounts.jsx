import "../../Dashboard.css"

import SearchModal from "../../../components/SearchModal";

import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";

import PageHeaders from "../../../components/PageHeaders";

import ListedAccounts from "../../../components/NavbarPagesComponents/ListedAccounts";

const ListOfAccounts = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">LIST OF ACCOUNTS</p>
          <PageHeaders
            pageTitle={"List Of Accounts"}
            pageWork={"Dashboard | Accounting | General Ledger"}
            mainAction={"Import share purchases"}
          />
          <ListedAccounts/>
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default ListOfAccounts;
