import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartTotal = () => {
  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <div className="col-12 col-lg-5 rounded py-3 px-4 cart-total text-center">
      <h3 className="text-start">CartTotal</h3>
      <div className="d-flex justify-content-between py-3">
        <p>Total price before discount</p>
        <p>$ {cart?.totalPriceBeforeDiscount}</p>
      </div>
      <div className="d-flex justify-content-between py-3">
        <p>Total discount </p>
        <p>$ {cart?.totalDiscount}</p>
      </div>
      <div className="d-flex justify-content-between py-3">
        <p>Shipping</p>
        <p>$ {cart?.shipping}</p>
      </div>
      <div className="d-flex justify-content-between py-3">
        <p>Final price</p>
        <p>$ {cart?.totalFinalPrice}</p>
      </div>

      <NavLink to={"/checkout"}>
        <button className="btn submit py-3">Process to checkout </button>
      </NavLink>
    </div>
  );
};

export default CartTotal;
