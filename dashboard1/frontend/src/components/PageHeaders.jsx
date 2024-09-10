import { FaUpload } from "react-icons/fa";
const PageHeaders = ({
  pageTitle,
  pageWork,
  mainAction,
  subAction,
  importName,
}) => {
  return (
    <div className="row header">
      <div className="col">
        <p>{pageTitle}</p>
        <p>{pageWork}</p>
        <button className="hero-btn">importName</button>
      </div>
      <div className="col">
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
