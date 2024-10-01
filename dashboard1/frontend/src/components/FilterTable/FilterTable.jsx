import React from "react";
import "./FilterTable.css";
import ComboxBox from "../InputsComponents/ComboxBox";
import { useDispatch, useSelector } from "react-redux";
import { hideFilterTable } from "../../Redux/Features/FilterTableSlice";

const FilterTable = () => {
  const data = {
    accountNo: [
      { value: "acc123", label: "Account 123" },
      { value: "acc456", label: "Account 456" },
      { value: "acc789", label: "Account 789" },
    ],
    clientName: [
      { value: "johnDoe", label: "John Doe" },
      { value: "janeSmith", label: "Jane Smith" },
      { value: "aliceJohnson", label: "Alice Johnson" },
    ],
    firstName: [
      { value: "john", label: "John" },
      { value: "jane", label: "Jane" },
      { value: "alice", label: "Alice" },
    ],
    lastName: [
      { value: "doe", label: "Doe" },
      { value: "smith", label: "Smith" },
      { value: "johnson", label: "Johnson" },
    ],
    branch: [
      { value: "nyBranch", label: "New York Branch" },
      { value: "laBranch", label: "Los Angeles Branch" },
      { value: "sfBranch", label: "San Francisco Branch" },
    ],
    externalId: [
      { value: "ext001", label: "EXT-001" },
      { value: "ext002", label: "EXT-002" },
      { value: "ext003", label: "EXT-003" },
    ],
    phone: [
      { value: "+1234567890", label: "+123 456 7890" },
      { value: "+0987654321", label: "+098 765 4321" },
      { value: "+1122334455", label: "+112 233 4455" },
    ],
    activationDate: [
      { value: "2024-01-01", label: "January 1, 2024" },
      { value: "2024-06-15", label: "June 15, 2024" },
      { value: "2024-12-31", label: "December 31, 2024" },
    ],
    actions: [
      { value: "approve", label: "Approve" },
      { value: "reject", label: "Reject" },
      { value: "hold", label: "Hold" },
    ],
  };

  const handleChange = (value) => {
    console.log("Selected value:", value);
  };

  const dispatch = useDispatch();
  const displayFilterTable = useSelector(
    (state) => state.filterModal.displayFilterTable
  );

  const handleFilterModal = () => {
    dispatch(hideFilterTable());
  };

  const handleWrapperClick = (e) => {
    if (e.target.classList.contains("modal-wrapper")) {
      handleFilterModal(); // Hide modal when clicking outside the modal content
    }
  };

  return (
    <div
      className={`modal filter-table ${displayFilterTable ? "active" : null}`}
      onClick={handleWrapperClick} // Add click event to modal wrapper
    >
      <div className="modal-wrapper">
        <div className="filter-container" onClick={(e) => e.stopPropagation()}>
          {/* Stop propagation when clicking inside the filter container */}
          <div className="header">
            <div className="row reset">
              <p>Filters</p>
              <p>RESET</p>
              <button onClick={handleFilterModal}>&times;</button>
            </div>
          </div>
          <div className="body">
            <div className="grid">
              {Object.keys(data).map((key) => (
                <div key={key} className="input-group">
                  <p className="label">
                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                  </p>
                  <ComboxBox options={data[key]} handleChange={handleChange} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTable;
