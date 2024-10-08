import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import PageHeaders from "../components/PageHeaders";
import AllLoanProductsComponentEntries from "../components/AllLoanProductsComponentEntries";

const LoanProductsList = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">LOAN PRODUCT LIST</p>
          <PageHeaders
            pageTitle={"All Loan Products"}
            pageWork={"Dashboard | Products"}
            mainAction={"New Loan Product"}
          />
          <AllLoanProductsComponentEntries/>
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default LoanProductsList;
