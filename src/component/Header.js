import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between  m-2">
      <div className="logo-box">
        <img src={LOGO_URL} className="w-14"></img>
      </div>
      <div>
        <ul className="flex items-center size-full">
          <li className="mx-2 px-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 px-1">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2 px-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 px-1">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
