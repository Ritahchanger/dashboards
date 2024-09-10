import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { hideSearchModal } from "../Redux/Features/SearchModalSlice";
const SearchModal = () => {
  const dispatch = useDispatch();
  const displaySearchModal = useSelector(
    (state) => state.searchModal.displaySearchModal
  );
  const handleHideSearchModal = () => {
    dispatch(hideSearchModal());
  };
  return (
    <div
      className={`modal search ${displaySearchModal ? "active" : ""}`}
      aria-hidden={!displaySearchModal}
    >
      <div className="modal-wrapper">
        <button className="close-icon" onClick={handleHideSearchModal}>
          &times;
        </button>
        <div className="modal-wrapper-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum iure
            soluta debitis assumenda dolore? Adipisci cupiditate aliquam, culpa
            ipsum esse maiores vitae corporis ducimus nobis, debitis a sint
            reiciendis! Vel enim dolores dolor voluptatum sunt, ut assumenda
            velit vitae dolorum corrupti modi tempore quas temporibus ipsam, sit
            iste non! Explicabo!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum iure
            soluta debitis assumenda dolore? Adipisci cupiditate aliquam, culpa
            ipsum esse maiores vitae corporis ducimus nobis, debitis a sint
            reiciendis! Vel enim dolores dolor voluptatum sunt, ut assumenda
            velit vitae dolorum corrupti modi tempore quas temporibus ipsam, sit
            iste non! Explicabo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
