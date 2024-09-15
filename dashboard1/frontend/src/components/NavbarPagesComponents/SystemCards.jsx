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
    bottomDescription: `Manage Datatables`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
  },
  {
    bottomDescription: `Audit Trail`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
  },
  {
    bottomDescription: `Manage Codes`,
    dangerIcon: <FaExclamation />,
    icon: <FaExclamationTriangle />,
  },
  {
    bottomDescription: `Reports`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
  },
  {
    bottomDescription: `Roles And Permissions`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Scheduler Jobs`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Configure Maker Checker Tasks`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Configurations`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Manage Hooks`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Account Number Preferences`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `External Services`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Surveys`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Two Factor Authentication`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
  {
    bottomDescription: `Self KYC`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
  },
];

const SystemCards = () => {
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

export default SystemCards;
