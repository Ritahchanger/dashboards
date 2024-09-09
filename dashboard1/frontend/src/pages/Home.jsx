import "./Home.css";

import { Link } from "react-router-dom";

import { CiLogin } from "react-icons/ci";

import { MdOutlineSettingsInputComposite } from "react-icons/md";

const Home = () => {
  return (
    <div className="Home">
      <nav className="home-nav">
        <div className="container">
          <div className="logo">
            <a href="#">
              logo<span>s</span>
            </a>
          </div>

          <div className="credential-navigation">
            <ul>
              <li>
                <Link to="/fintec/dashboard">
                  <button>
                    {" "}
                    <span>
                      <CiLogin />
                    </span>{" "}
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Request Demo</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          sapiente.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <span className="applications-settings">
        <MdOutlineSettingsInputComposite />
      </span>
    </div>
  );
};

export default Home;
