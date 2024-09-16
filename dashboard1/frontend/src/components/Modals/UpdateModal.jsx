import SwitchButton from "../InputsComponents/SwitchButton";
import "./UpdateModal.css";

const UpdateModal = () => {
  return (
    <div className="modal updates">
      <div className="modal-wrapper">
        <button className="close-icon">&times;</button>
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
              <p>Manual Entries Allowed</p>
              <SwitchButton />
            </div>
            <div className="col">
              <p>Account is Disabled</p>
              <SwitchButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
