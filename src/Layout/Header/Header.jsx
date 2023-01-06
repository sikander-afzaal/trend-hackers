import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="container header-wrapp">
      {headerToggle && <div className="overlay"></div>}
      <header>
        <img
          onClick={() => setHeaderToggle((prev) => !prev)}
          src="/STACK LINE.png"
          className="header-toggle"
          alt=""
        />
        <nav className={headerToggle ? "active-side" : ""}>
          <a href="#">Summary</a>
          <a href="#">Contact</a>
          <a href="#">Links</a>
        </nav>
        <img src="/ico.png" alt="" />
      </header>
    </div>
  );
};

export default Header;
