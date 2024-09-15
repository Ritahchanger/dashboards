import React, { useState } from "react";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";
import "../../Dashboard.css";
import SearchModal from "../../../components/SearchModal";
import PageHeaders from "../../../components/PageHeaders";
import ProductsCards from "../../../components/NavbarPagesComponents/ProductsCards";

const Products = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">PRODUCTS</p>
          <PageHeaders
            pageTitle={"Products"}
            pageWork={"Dashboard | Admin"}
            mainAction={"Download Template"}
            importName={"View All Products"}
          />
          <ProductsCards />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default Products;
