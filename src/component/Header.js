import { useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  //subscribing the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between  m-2">
      <div className="logo-box">
        <img src={LOGO_URL} alt="logo" className="w-14"></img>
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
          <li className="mx-2 px-1 font-bold">
            <Link to="/cart">Cart {cartItems.length} </Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
