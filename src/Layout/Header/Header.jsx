import "./Header.css";

const Header = () => {
  return (
    <div className="container header-wrapp">
      <header>
        <img src="/STACK LINE.png" alt="" />
        <nav>
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
