import DashboardNavbar from "../components/DashboardNavbar";

import DashboardSidebar from "../components/DashboardSidebar";

import DashboardOverview from "../components/DashboardOverview";

import "./Dashboard.css";

import SearchModal from "../components/SearchModal";

const BalanceSheet = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <DashboardSidebar />
      <p className="empty"></p>
      <div className="main">
        <div className="balance-sheet">
          <p className="medium-header">
            BALANCE SHEET
          </p>
          <div className="row">
            <div className="col">
              <p className="medium-header">MICROFINANCE NAME</p>
            </div>
            <div className="col">
              <p>Balance Sheet</p>
              <p>Branch Rosema</p>
              <p>As On: 09 Sep 2024</p>
            </div>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <td>ACCOUNT</td>
                  <td>CODE</td>
                  <td>DATE1</td>
                  <td>DATE2</td>
                  <td>DATE3</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Liability</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SearchModal/>
    </div>
  );
};

export default BalanceSheet;
