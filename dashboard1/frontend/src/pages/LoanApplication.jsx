import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import PageHeaders from "../components/PageHeaders";
import SearchModal from "../components/SearchModal";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";

import AllTasksEntries from "../components/NavbarPagesComponents/AllTasksEntries";

const LoanApplication = () => {
  const tabs = [
    { key: "1", label: "CHECKER INBOX" },
    { key: "2", label: "PENDING APPROVALS" },
    { key: "3", label: "PENDING DISBURSAL" },
    { key: "4", label: "ACTIVE" },
    { key: "5", label: "OVERDUE" },
    { key: "6", label: "NON PERFORMING ASSETS" },
    { key: "7", label: "PENDING RESCHEDULES" },
  ];

  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">LOAN APPLICATION</p>
          <PageHeaders
            pageTitle={"All Tasks"}
            pageWork={"Dashboard | Management | Tasks"}
            mainAction={"Import Loans"}
          />
          <Tabs defaultActiveKey="1" className="tabs">
            {tabs.map((tab) => (
              <TabPane tab={tab.label} key={tab.key}></TabPane>
            ))}
          </Tabs>
          <AllTasksEntries />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default LoanApplication;
