import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatchAction = useDispatch();

  return (
    <div>
      <h1>This is cart</h1>
      <h2>Ordered item list</h2>
      {cartItems.map((item) => {
        return (
          <div className="flex justify-between border w-6/12 m-auto">
            <div>{item.info.name}</div>
            <div>{item.info.price / 100}</div>
          </div>
        );
      })}
      <button
        className="m-2 p-2 border bg-black text-white rounded-lg"
        onClick={() => {
          dispatchAction(clearCart());
        }}
      >
        Clear cart
      </button>
    </div>
  );
};

export default Cart;
