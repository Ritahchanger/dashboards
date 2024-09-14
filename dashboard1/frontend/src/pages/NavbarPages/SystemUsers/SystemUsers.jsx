import React, { useState } from "react";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";
import "../../Dashboard.css";
import SearchModal from "../../../components/SearchModal";
import PageHeaders from "../../../components/PageHeaders";
import SystemUserList from "../../../components/NavbarPagesComponents/SystemUsersList";

const SystemUsers = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">SYSTEM USERS </p>
          <PageHeaders
            pageTitle={"All SystemUsers"}
            pageWork={"Dashboard | SystemUsers"}
            mainAction={"Download Template"}
            importName={"View All SystemUsers"}
          />
          <SystemUserList />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default SystemUsers;
