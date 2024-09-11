import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import "./JournalEntries.css";

import SearchModal from "../components/SearchModal";

import EntriesComponent from "../components/EntriesComponent";

const AddNewShareProduct = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">ADD NEW SHARE PRODUCT</p>
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
                <p>0.5</p>
                <p>Market Prices</p>
              </div>
              <div className="row">
                <input type="checkbox" name="" id="" />
                <p>0.6</p>
                <p>Accounting Method</p>
              </div>
              <div className="row">
                <input type="checkbox" name="" id="" />
                <p>0.7</p>
                <p>Accounting</p>
              </div>
            </div>
            <div className="col">
              <div className="grid">
                <div className="input-group">
                  <input type="text" name="" id="" placeholder="Product Name" />
                </div>
                <div className="input-group">
                  <input type="text" name="" id="" placeholder="Short Name" />
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

export default AddNewShareProduct;
