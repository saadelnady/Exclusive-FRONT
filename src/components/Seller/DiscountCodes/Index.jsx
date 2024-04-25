import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerCoupons } from "../../../store/actions/couponCode/couponCodeActions";

const Index = () => {
  const { coupons } = useSelector((state) => state.couponCodeReducer);
  const { seller } = useSelector((state) => state.sellerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("TOKEN") && seller && seller._id) {
      dispatch(fetchSellerCoupons({ sellerId: seller?._id }));
    }
  }, [dispatch, seller]);
  return (
    <div className="over-flow-scroll">
      <table className="w-100 rounded text-center shadow">
        <thead>
          <th>ID</th>
          <th>coupon title</th>
          <th>coupon value</th>
          <th>selected product</th>
          <th>Min amount</th>
          <th>Max Amount</th>
        </thead>
        <tbody>
          {coupons &&
            coupons?.map((coupon, index) => (
              <tr key={index}>
                <td>{coupon?._id}</td>
                <td>{coupon?.title}</td>
                <td>{coupon?.value}</td>
                <td>{coupon?.selectedProduct?.title.slice(0, 19) + "..."}</td>
                <td>{coupon?.minAmount}</td>
                <td>{coupon?.maxAmount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
