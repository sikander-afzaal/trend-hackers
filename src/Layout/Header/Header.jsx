import { useState } from "react";
import "./Header.css";

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
            <a onClick={() => setHeaderToggle(false)} href="#">
              Summary
            </a>
            <a onClick={() => setHeaderToggle(false)} href="#">
              Contact
            </a>
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
