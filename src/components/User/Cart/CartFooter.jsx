import Cuppon from "./Cuppon.jsx";
import CartTotal from "./CartTotal.jsx";

const CartFooter = () => {
  return (
    <div className="d-flex justify-content-between flex-wrap align-items-start">
      <Cuppon />
      <CartTotal />
    </div>
  );
};

export default CartFooter;
