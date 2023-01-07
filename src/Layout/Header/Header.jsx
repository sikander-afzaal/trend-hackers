import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <>
      {headerToggle && (
        <div onClick={() => setHeaderToggle(false)} className="overlay"></div>
      )}
      <div className="container header-wrapp">
        <header>
          <img
            onClick={() => setHeaderToggle((prev) => !prev)}
            src="/STACK LINE.png"
            className="header-toggle"
            alt=""
          />
          <nav className={headerToggle ? "active-side" : ""}>
            <Link to="/" onClick={() => setHeaderToggle(false)} href="#">
              Summary
            </Link>
            <Link to="/contact" onClick={() => setHeaderToggle(false)} href="#">
              Contact
            </Link>
            <a onClick={() => setHeaderToggle(false)} href="#">
              Links
            </a>
          </nav>

          <img src="/ico.png" alt="" />
        </header>
      </div>{" "}
    </>
  );
};

export default Header;
