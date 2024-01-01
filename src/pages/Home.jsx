import { Categouries } from "../components/shared/Categouries";
import {
  Slider,
  FlashSale,
  AboutUs,
  CategouriesBrowse,
  BestSelling,
  OurProducts,
  NewArrival,
} from "../routes";
import bgAnnounce2 from "../assets/images/pngs/bg-announce-2.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../store/actions/userActions";
// import { fetchSeller } from "../store/actions/sellerActions";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      dispatch(fetchUser());
      // dispatch(fetchSeller());
    }
  }, [dispatch]);
  return (
    <div className="container">
      <div className="row justify-content-between align-items-start">
        <Categouries />
        <Slider />
      </div>
      <FlashSale />
      <CategouriesBrowse />
      <BestSelling />
      <div>
        <NavLink>
          <img src={bgAnnounce2} alt="" className="w-100" />
        </NavLink>
      </div>
      <OurProducts />
      <NewArrival />
      <AboutUs />
    </div>
  );
};
