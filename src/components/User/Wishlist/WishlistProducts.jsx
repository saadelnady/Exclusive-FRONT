import { useSelector } from "react-redux";
import Card from "../../Shared/Card";

const WishlistProducts = () => {
  const { wishList } = useSelector((state) => state.wishListReducer);
  return (
    <>
      {wishList?.products && wishList?.products?.length > 0 ? (
        <div className="d-flex gap-1 flex-wrap">
          {wishList?.products?.map((item, index) => (
            <Card product={item.product} key={index} isWishlist={true} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default WishlistProducts;
