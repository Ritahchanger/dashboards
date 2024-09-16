import SwitchButton from "../InputsComponents/SwitchButton";
import "./UpdateModal.css";

import { useDispatch, useSelector } from "react-redux";

import { hideUpdateModal } from "../../Redux/Features/UpdateAccountSlice";

const UpdateModal = () => {
  const dispatch = useDispatch();

  const displayUpdateModal = useSelector(
    (state) => state.updateModal.displayUpdateModal
  );

  const handleUpdateModalClose = () => {
    dispatch(hideUpdateModal());
  };

  return (
    <div className={`modal updates ${displayUpdateModal ? "active" : null}`}>
      <div className="modal-wrapper">
        <button className="close-icon" onClick={handleUpdateModalClose}>
          &times;
        </button>
        <div className="modal-wrapper-container">
          <p className="medium-header">UPDATE ACCOUNT</p>
          <div className="grid">
            <div className="input-group">
              <input type="text" required />
              <label>Asset</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label>Detail</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label>Parent Account</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label>Liabilities</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label>Account Code</label>
            </div>
          </div>
          <div className="description">
            <textarea name="#" id="" placeholder="Description">
              {" "}
            </textarea>
          </div>
          <div className="row">
            <div className="col">
              <p
                style={{
                  marginBottom: "10px",
                }}
              >
                Manual Entries Allowed
              </p>
              <SwitchButton />
            </div>
            <div className="col">
              <p
                style={{
                  marginBottom: "10px",
                }}
              >
                Account is Disabled
              </p>
              <SwitchButton />
            </div>
          </div>
          <button
            className="action-btn update-btn"
            style={{
              marginTop: "1rem",
            }}
          >
            Update Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
