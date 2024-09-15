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
      bottomDescription: `Loan Products`,
      dangerIcon: <FaExclamation />,
      icon: <FaUsers />,
    },
    {
      bottomDescription: `Product Mix`,
      dangerIcon: <FaExclamation />,
      icon: <FaUsers />,
    },
    {
      bottomDescription: `Savings Products`,
      dangerIcon: <FaExclamation />,
      icon: <FaExclamationTriangle />,
    },
    {
      bottomDescription: `Fixed Deposits`,
      dangerIcon: <FaExclamation />,
      icon: <FaUsers />,
    },
    {
      bottomDescription: `Share Products`,
      dangerIcon: <FaExclamation />,
      loans: 0,
      icon: <FaDollarSign />,
    },
    {
      bottomDescription: `Recurring Deposits`,
      dangerIcon: <FaExclamation />,
      loans: 0,
      icon: <FaDollarSign />,
    },
    {
      bottomDescription: `Charges`,
      dangerIcon: <FaExclamation />,
      loans: 0,
      icon: <FaDollarSign />,
    },
    {
      bottomDescription: `Manage Tax Configs`,
      dangerIcon: <FaExclamation />,
      loans: 0,
      icon: <FaDollarSign />,
    },
    {
      bottomDescription: `Floating Rates`,
      dangerIcon: <FaExclamation />,
      loans: 0,
      icon: <FaDollarSign />,
    },
  ];
  
  const ProductsCards = () => {
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
  
  export default ProductsCards;
  