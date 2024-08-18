import { useEffect } from "react";
import WishlistHeading from "./WishlistHeading.jsx";
import WishlistProducts from "./WishlistProducts.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getWishList } from "../../../store/actions/wishList/wishListActions.js";
const Index = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?._id) {
      dispatch(getWishList(user?._id));
    }
  }, [dispatch, user?._id]);
  return (
    <div className="container py-5">
      <WishlistHeading />
      <WishlistProducts />
    </div>
  );
};

export default Index;
