import { CiAlignLeft } from "react-icons/ci";
import {
  FaExclamationTriangle,
  FaUsers,
  FaDollarSign,
  FaRegClock,
} from "react-icons/fa";
import "./DashboardOverview.css";

const customersData = [
  {
    name: `All customers`,
    no: 22,
    icon: <FaUsers />,
  },
  {
    name: `Active Customers`,
    no: 21,
    icon: <FaUsers />,
  },
  {
    name: `Inactive Customers`,
    no: 1,
    icon: <FaExclamationTriangle />,
  },
  {
    name: `New customers this Month`,
    no: 21,
    icon: <FaUsers />,
  },
  {
    name: `PRINCIPAL Outstanding`,
    no: 0.0,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    name: `Interest Outstanding`,
    no: 0.0,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    name: `TOTAL Outstanding`,
    no: 0.0,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    name: `Interest this month`,
    no: 0.0,
    isInterest: `No interest this month`,
    icon: <FaDollarSign />,
  },
  {
    name: `Principal Overdue`,
    no: 0.0,
    loans: 0,
    icon: <FaRegClock />,
  },
  {
    name: `Interest Overdue`,
    no: 0.0,
    loans: 0,
    icon: <FaRegClock />,
  },
  {
    name: `Total Overdue`,
    no: 0.0,
    loans: 0,
    icon: <FaRegClock />,
  },
  {
    name: `Non Performing Assets`,
    no: 0.0,
    loans: 0,
    icon: <FaExclamationTriangle />,
  },
  {
    name: `Loans For Approval`,
    no: 0.0,
    desc: `No Loans for approval`,
    icon: <FaExclamationTriangle />,
  },
  {
    name: `Loans For Disbursal`,
    no: 0.0,
    desc: `No loans for disbursal`,
    icon: <FaExclamationTriangle />,
  },
  {
    name: `Disbursements Today`,
    no: 0.0,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    name: `Disbursed This Month`,
    no: 0.0,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    name: `New Clients Today`,
    no: 0.0,
    icon: <FaUsers />,
  },
  {
    name: `Portfolio At Risk`,
    no: "N/A",
    desc: `0.00/0.00`,
    icon: <FaExclamationTriangle />,
  },
];

const DashboardOverview = () => {
  return (
    <div className="overview">
      <div className="grid">
        {customersData.map((customer, index) => (
          <div className="card" key={index}>
            <div className="row">
              <div className="col">
                <p className="card-title">{customer.name}</p>
                <p className="medium-header"  >{customer.no}</p>

                {customer.loans !== undefined && (
                  <p>{`Loans: ${customer.loans}`}</p>
                )}
                {customer.desc && <p>{customer.desc}</p>}
              </div>
              <div className="col icon-col">
                <span>{customer.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
