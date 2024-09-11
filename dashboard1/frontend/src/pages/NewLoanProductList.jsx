import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import PageHeaders from "../components/PageHeaders";

import "./NewLoanProduct.css"

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

          <div className="main-displayer">
            <div className="col">
              <div className="row">
                <input type="checkbox" name="" id="" />
                <p>01</p>
                <p>Product Details</p>
              </div>
              <div className="row">
                <input type="checkbox" name="" id="" />
                <p>02</p>
                <p>Currency</p>
              </div>
              <div className="row">
                <input type="checkbox" name="" id="" />
                <p>03</p>
                <p>Terms</p>
              </div>
              <div className="row">
                <input type="checkbox" name="" id="" />
                <p>04</p>
                <p>Settings</p>
              </div>
              <div className="row">
                <input type="checkbox" name="" id="" />
                <p>05</p>
                <p>Guarantor Settings</p>
              </div>
            </div>
            <div className="col">
              <div className="grid">
                <div className="input-group">
                  <input type="text" name="" id="" placeholder="Product name" />
                </div>
                <div className="input-group">
                  <input type="text" name="" id="" placeholder="Short Name" />
                </div>
                <div className="input-group">
                  <input type="text" name="" id="" placeholder="Fund" />
                </div>
                <div className="custom-row">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  Include In Customer Loan Counter
                </div>
                <div className="input-group">
                  <input type="date" name="" id="" placeholder="Start date" />
                </div>
                <div className="input-group">
                  <input type="date" name="" id="" placeholder="End date" />
                </div>
              </div>
            </div>
          </div>

          <div className="product-description">
            <textarea
              name="desc"
              id=""
              placeholder="Describe the product"
            ></textarea>
          </div>
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default NewLoanProductsList;
