import Links from "./Links.jsx";
import CartTable from "./CartTable.jsx";
import CartButtons from "./CartButtons.jsx";
import CartFooter from "./CartFooter.jsx";
import "./styles/Cart.css";
import { useEffect, useState } from "react";
import { getCart } from "../../../store/actions/cart/cartActions.js";
import { useDispatch, useSelector } from "react-redux";
import Warning from "../../../components/Shared/Warning.jsx";
import { RiDeleteBin6Line } from "react-icons/ri";

const Index = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  const [isWarning, setIsWarning] = useState(false);
  const [currentProductId, setCurrentProductId] = useState("");
  const dispatch = useDispatch();
  // ==========================================================
  const handleShowWarning = () => {
    setCurrentProductId("");
    setIsWarning(!isWarning);
  };
  // ==========================================================
  useEffect(() => {
    if (user?._id) {
      dispatch(getCart(user?._id));
    }
  }, [dispatch, user?._id]);

  // ==========================================================

  const deleteProductFromCartHandler = () => {
    const payLoad = { cartId: cart?._id, productId: currentProductId };
    console.log("cartId ==>", cart?._id);
    console.log("productId ==>", currentProductId);

    // dispatch(deleteProductFromCart(payLoad));
  };
  return (
    <>
      {isWarning && (
        <Warning
          handleShowWarning={handleShowWarning}
          actionTitle={"Delete"}
          actionHandler={deleteProductFromCartHandler}
          Icon={<RiDeleteBin6Line />}
          message={"Are you sure to Delete this product from your cart ?"}
          subMessage
        />
      )}
      <div className="container py-5">
        <Links />
        <CartTable
          handleShowWarning={handleShowWarning}
          setCurrentProductId={setCurrentProductId}
        />
        <CartButtons />
        <CartFooter />
      </div>
    </>
  );
};

export default Index;
