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
      bottomDescription: `S3 Amazon Service Configuration`,
      dangerIcon: <FaExclamation />,
      icon: <FaUsers />,
    },
    {
      bottomDescription: `External Service Configuration`,
      dangerIcon: <FaExclamation />,
      icon: <FaUsers />,
    },
    {
      bottomDescription: `SMS Configuration`,
      dangerIcon: <FaExclamation />,
      icon: <FaExclamationTriangle />,
    },
    {
      bottomDescription: `Notification`,
      dangerIcon: <FaExclamation />,
      icon: <FaUsers />,
    },
    {
      bottomDescription: `Credit Bureau Configuration`,
      dangerIcon: <FaExclamation />,
      loans: 0,
      icon: <FaDollarSign />,
    },
  ];
  
  const ExternalServicesCards = () => {
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
  
  export default ExternalServicesCards;
  