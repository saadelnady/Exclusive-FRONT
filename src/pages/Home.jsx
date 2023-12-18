import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/actions/userActions";
import { Categouries } from "../components/shared/Categouries";
import { Slider, FlashSale } from "../routes";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row justify-content-between align-items-start">
        <Categouries />
        <Slider />
      </div>
      <FlashSale />
    </div>
  );
};
