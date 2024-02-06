import { LOGO_URL } from "../utils/constant";
import About from "./About";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={LOGO_URL}></img>
      </div>
      <div className="navbar">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
