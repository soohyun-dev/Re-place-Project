import "./Nav.css";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Nav;
