import { FaUpload } from "react-icons/fa";
import "./PageHeaders.css"
const PageHeaders = ({
  pageTitle,
  pageWork,
  mainAction,
  subAction,
  importName,
}) => {
  return (
    <div className="row header main-header">
      <div className="col">
        <p>{pageTitle}</p>
        <p>{pageWork}</p>
      </div>
      <div className="col client">
        <div className="row">
          <div className="col">
            <p>{mainAction}</p>
          </div>
          <div className="col">
            <button className="hero-btn">
              <span>
                <FaUpload />
              </span>
              <span>{mainAction}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeaders;
