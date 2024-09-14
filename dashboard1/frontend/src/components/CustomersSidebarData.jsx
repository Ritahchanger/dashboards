const customers = [
  {
    initials: "JM",
    name: "John Mathews",
    accountNumber: "123456789012345",
    phoneNumber: "9876543210",
  },
  {
    initials: "EM",
    name: "Emily Moore",
    accountNumber: "234567890123456",
    phoneNumber: "8765432109",
  },
  {
    initials: "LP",
    name: "Liam Patel",
    accountNumber: "345678901234567",
    phoneNumber: "7654321098",
  },
  {
    initials: "OW",
    name: "Olivia White",
    accountNumber: "456789012345678",
    phoneNumber: "6543210987",
  },
  {
    initials: "NJ",
    name: "Noah Jones",
    accountNumber: "567890123456789",
    phoneNumber: "5432109876",
  },
  {
    initials: "SC",
    name: "Sophia Carter",
    accountNumber: "678901234567890",
    phoneNumber: "4321098765",
  },
  {
    initials: "EB",
    name: "Ethan Brown",
    accountNumber: "789012345678901",
    phoneNumber: "3210987654",
  },
  {
    initials: "AM",
    name: "Ava Martin",
    accountNumber: "890123456789012",
    phoneNumber: "2109876543",
  },
  {
    initials: "CW",
    name: "Charlie Wilson",
    accountNumber: "901234567890123",
    phoneNumber: "1098765432",
  },
  {
    initials: "GR",
    name: "Grace Rodriguez",
    accountNumber: "012345678901234",
    phoneNumber: "0987654321",
  },
];
const CustomersSidebarData = () => {
  return (
    <div className="customer-main">
      {customers.map((customer, index) => (
        <div className="row" key={index}>
          <div className="col">
            <div className="profile-image">{customer.initials}</div>
            <div className="customer-details">
              <p className="customer-name">{customer.name}</p>
              <p className="customer-number">{customer.accountNumber}</p>
            </div>
          </div>
          <p className="customer-number">{customer.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomersSidebarData;
