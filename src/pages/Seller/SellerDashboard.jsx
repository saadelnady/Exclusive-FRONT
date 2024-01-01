import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSeller } from "../../store/actions/sellerActions";

export const SellerDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchSeller);
    }
  }, [dispatch]);
  return <div>SellerDashboard</div>;
};
