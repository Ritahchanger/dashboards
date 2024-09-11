import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import PageHeaders from "../components/PageHeaders";

const NewLoanProductsList = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">LOAN PRODUCT LIST</p>
          <PageHeaders
            pageTitle={"Create Loan product"}
            pageWork={"Dashboard | Loan Product"}
            mainAction={"Cancel"}
          />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default NewLoanProductsList;
