import "./Footer.css";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="foot-wrapp container">
      {/* <img src="/footer-bg.png" className="bg" alt="" /> */}
      <footer>
        <img src="/eyes.png" alt="" />
        <div className="social">
          <a href="#" target={"blank"}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" target={"blank"}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target={"blank"}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" target={"blank"}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target={"blank"}>
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
