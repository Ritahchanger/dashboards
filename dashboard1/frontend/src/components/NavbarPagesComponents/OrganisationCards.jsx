import {
  FaExclamationTriangle,
  FaUsers,
  FaDollarSign,
  FaRegClock,
  FaExclamation,
} from "react-icons/fa";

import "../DashboardNavbar.css";

import "./organizationCards.css";

const data = [
  {
    bottomDescription: `Manage Offices`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
  },
  {
    bottomDescription: `Currencies`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
  },
  {
    bottomDescription: `Manage Holidays`,
    dangerIcon: <FaExclamation />,
    icon: <FaExclamationTriangle />,
  },
  {
    bottomDescription: `Funds`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
  },
  {
    bottomDescription: `Manage Employees`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Bulk Loan Assignment`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Standing Orders Log`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Teller/Cashier Mgt`,
    dangerIcon: <FaExclamation />,
    isInterest: `No interest this month`,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Fund Mapping`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaRegClock />,
  },
  {
    bottomDescription: `Working Days`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaRegClock />,
  },
  {
    bottomDescription: `Password Preferences`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaRegClock />,
  },
  {
    bottomDescription: `Payment Types`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaExclamationTriangle />,
  },
  {
    bottomDescription: `Loan provisioning criteria`,
    dangerIcon: <FaExclamation />,
    desc: `No Loans for approval`,
    icon: <FaExclamationTriangle />,
  },
  {
    bottomDescription: `SMS Campaigns`,
    dangerIcon: <FaExclamation />,
    desc: `No loans for disbursal`,
    icon: <FaExclamationTriangle />,
  },
  {
    bottomDescription: `Entity Datable checks`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Adhoc Query`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Bulk Import`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
  },
  {
    bottomDescription: `Templates`,
    dangerIcon: <FaExclamation />,
    desc: `0.00/0.00`,
    icon: <FaExclamationTriangle />,
  },
];

const OrganizationCards = () => {
  return (
    <div className="overview organizationCards">
      <div className="grid">
        {data.map((customer, index) => (
          <div className="card" key={index}>
            <div className="row">
              <div className="col">
                <p className="card-title">{customer.dangerIcon}</p>
                <p className="medium-header">{customer.bottomDescription}</p>

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

export default OrganizationCards;
