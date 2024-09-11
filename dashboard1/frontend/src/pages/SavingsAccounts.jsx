import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

import SavingEntriesComponents from "../components/SavingsEntriesComponents";

import { Tabs, message } from "antd";

const { TabPane } = Tabs;
const listItems = [
  "ALL ACCOUNTS",
  "SAVINGS ACCOUNTS",
  "FIXED DEPOSIT ACCOUNTS",
  "TARGET DEPOSITS ACCOUNTS",
];

const SavingsAccounts = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main journal">
        <div className="journal-container">
          <p className="medium-header">SAVINGS ACCOUNT</p>
          <Tabs defaultActiveKey="1">
            {listItems.map((item, index) => (
              <TabPane tab={item} key={index}></TabPane>
            ))}
          </Tabs>

          <SavingEntriesComponents />
        </div>
      </div>
      <SearchModal />
    </div>
  );
};

export default SavingsAccounts;
