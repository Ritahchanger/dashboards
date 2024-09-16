import {
  FaExclamationTriangle,
  FaUsers,
  FaDollarSign,
  FaRegClock,
  FaExclamation,
} from "react-icons/fa";

import "../DashboardNavbar.css";

import "./organizationCards.css";

import { useNavigate } from "react-router-dom";



const data = [
  {
    bottomDescription: `Chart Of Accounts`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
    link: "/app/accounting/coa",
  },
  {
    bottomDescription: `Frequent Postings`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
    link: "#",
  },
  {
    bottomDescription: `Create Journal Entries`,
    dangerIcon: <FaExclamation />,
    icon: <FaExclamationTriangle />,
    link: "#",
  },
  {
    bottomDescription: `Closing Entries`,
    dangerIcon: <FaExclamation />,
    icon: <FaUsers />,
    link: "#",
  },
  {
    bottomDescription: `Search Journal Entries`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
    link: "#",
  },
  {
    bottomDescription: `Accounting Rules`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
    link: "#",
  },
  {
    bottomDescription: `Accounts Link to Final Activities`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
    link: "#",
  },
  {
    bottomDescription: `Accruals`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
    link: "#",
  },
  {
    bottomDescription: `Migrate Opening Balances`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
    link: "#",
  },
  {
    bottomDescription: `Provisioning Criteria`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
    link: "#",
  },
  {
    bottomDescription: `Entries`,
    dangerIcon: <FaExclamation />,
    loans: 0,
    icon: <FaDollarSign />,
    link: "#",
  },
];

const AccountingCards = () => {
  const navigate = useNavigate();
  const handleLink = (linkToOpen) => {
    navigate(linkToOpen);
  };
  return (
    <div className="overview organizationCards">
      <div className="grid">
        {data.map((customer, index) => (
          <div
            className="card"
            key={index}
            onClick={() => {
              handleLink(customer?.link);
            }}
          >
            <div className="row">
              <div className="col">
                <p className="card-title">{customer?.dangerIcon}</p>
                <p className="medium-header">{customer?.bottomDescription}</p>

                {customer?.loans !== undefined && (
                  <p>{`Loans: ${customer.loans}`}</p>
                )}
                {customer?.desc && <p>{customer?.desc}</p>}
              </div>
              <div className="col icon-col">
                <span>{customer?.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountingCards;
