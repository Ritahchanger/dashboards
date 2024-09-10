import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";
import SearchModal from "../components/SearchModal";
import "./AddCustomer.css";
const AddCustomer = () => {
  return (
    <div className="dashboard add-customer">
      <DashboardNavbar />
      <DashboardSidebar />

      <div className="main journal">
        <p className="empty"></p>
        <div className="journal-container">
          <p className="medium-header">ADD CUSTOMERS</p>

          <div className="row header">
            <div className="col">
              <p>Customer Onboarding</p>
              <p>Dashboard | Customers</p>
            </div>
            <div className="col">
              <button className="hero-btn">Cancel</button>
            </div>
          </div>

          <div className="add-customer-wrapper">
            <div className="grid">
              <div className="col steps">
                {[
                  {
                    id: "01",
                    title: "Bio Data",
                    description: "Client Bio Data",
                  },
                  {
                    id: "02",
                    title: "Branch & Others",
                    description: "Branch, Staff",
                  },
                  {
                    id: "03",
                    title: "Family",
                    description: "Family, Next Of Kin",
                  },
                  {
                    id: "04",
                    title: "Addresses",
                    description: "Client Addresses",
                  },
                  {
                    id: "05",
                    title: "Onboard Client",
                    description: "Review & Onboard",
                  },
                ].map((step, index) => (
                  <div className="row" key={index}>
                    <input
                      type="checkbox"
                      name={`step-${step.id}`}
                      id={`step-${step.id}`}
                    />
                    <p className="idno">{step.id}</p>
                    <div className="card">
                      <p>{step.title}</p>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col form-inputs">
                <div className="input-group">
                  <input
                    type="text"
                    id="person"
                    name="person"
                    placeholder="Person"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    id="otherNames"
                    name="otherNames"
                    placeholder="Other Names"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Surname"
                  />
                </div>

                <div className="input-group">
                  <input type="date" id="dob" name="dob" />
                </div>

                <div className="input-group">
                  <select id="gender" name="gender">
                    <option value="">--Select Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    id="mobileNo"
                    name="mobileNo"
                    placeholder="Mobile No"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>

                <div className="input-group">
                  <input type="date" id="submittedOn" name="submittedOn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SearchModal />
    </div>
  );
};

export default AddCustomer;
