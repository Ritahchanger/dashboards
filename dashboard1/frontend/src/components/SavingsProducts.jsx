import { FaEdit } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
const savings = [
  {
    productName: "Cooperate Account",
    currency: "US Dollar",
    accountingType: "CASH BASED",
  },
  {
    productName: "Savings Accounts",
    currency: "US Dollar",
    accountingType: "NONE",
  },
  {
    productName: "Charges Account",
    currency: "South Sudanese Pound",
    accountingType: "CASH BASED",
  },
  {
    productName: "Regular Savings Accounts",
    currency: "South Sudanese Pound",
    accountingType: "CASH BASED",
  },
  {
    productName: "Staff Account",
    currency: "US Dollar",
    accountingType: "CASH BASED",
  },
  {
    productName: "Government Account",
    currency: "South Sudanese Pound",
    accountingType: "NONE",
  },
];

const SavingsProductsEntries = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Product Name</td>
            <td>Currency</td>
            <td>Accounting Type</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {savings.map((saving, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{saving.productName}</td>
              <td>{saving.currency}</td>
              <td>{saving.accountingType}</td>

              <td>
                <div className="table-buttons">
                  <Link to={`/fintec/savings/list/893283`}>
                    <button>
                      <FaEdit />
                    </button>
                  </Link>
                  <Link to={`/fintec/savings/list/7837238`}>
                    <button>
                      <BiShow />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavingsProductsEntries;
