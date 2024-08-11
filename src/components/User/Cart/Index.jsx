import Links from "./Links.jsx";
import CartTable from "./CartTable.jsx";
import CartButtons from "./CartButtons.jsx";
import CartFooter from "./CartFooter.jsx";
import "./styles/Cart.css";
import { useEffect, useState } from "react";
import { getCart } from "../../../store/actions/cart/cartActions.js";
import { useDispatch, useSelector } from "react-redux";
import Warning from "../../../components/Shared/Warning.jsx";
import { deleteProductFromCartAction } from "../../../helpers/options.js";
import { RiDeleteBin6Line } from "react-icons/ri";

const Index = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  const [isWarning, setIsWarning] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const deleteProductFromCartAction = {
    type: { AR: "حذف", EN: "Delete" },
    message: {
      AR: "هل تود حذف هذا  المنتج من العربة ؟",
      EN: "Are you sure to Delete this product from your cart ?",
    },
    Icon: <RiDeleteBin6Line />,
    actionHandler: () => {
      // const payLoad = { cartId, productId };
      console.log(" cartId===>", cart?._id);
      console.log(" productId===>", currentProductId);

      //dispatch(deleteCategory(payLoad));
    },
  };
  // ==========================================================
  const handleDeleteProductFromCart = (cartId, productId) => {
    console.log(" cartId===>", cartId);
    console.log(" productId===>", productId);

    const payLoad = { cartId, productId };
    // dispatch(deleteCategory(payLoad));

    handleShowWarning();
  };
  const handleShowWarning = () => {
    setCurrentProductId(null);
    setIsWarning(!isWarning);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?._id) {
      dispatch(getCart(user?._id));
    }
  }, [dispatch, user?._id]);
  return (
    <>
      {isWarning && (
        <Warning
          handleShowWarning={handleShowWarning}
          action={deleteProductFromCartAction}
        />
      )}
      <div className="container py-5">
        <Links />
        <CartTable
          handleShowWarning={handleShowWarning}
          handleDeleteProductFromCart={handleDeleteProductFromCart}
          setCurrentProductId={setCurrentProductId}
        />
        <CartButtons />
        <CartFooter />
      </div>
    </>
  );
};

export default Index;
