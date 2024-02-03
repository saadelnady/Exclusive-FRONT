import React from "react";
import icShop from "../../assets/images/pngs/ic-shop.png";
import icDollarSign from "../../assets/images/pngs/ic-dollar.png";
import icShoppingBag from "../../assets/images/pngs/ic-mallbag.png";
import icMoneyBag from "../../assets/images/pngs/ic-moneyBag.png";
export const Statistics = () => {
  return (
    <div className="statistics d-flex flex-wrap justify-content-center  gap-5 justify-content-md-between mt-5">
      <div className="border rounded p-4  text-center  ">
        <div className="statistic-img mx-auto rounded-pill mb-3 bg-black">
          <img src={icShop} alt="" />
        </div>
        <h4>10.5k</h4>
        <p>Sallers active our site</p>
      </div>
      <div className="border rounded p-4 text-center   ">
        <div className="statistic-img mx-auto rounded-pill bg-black mb-3">
          <img src={icDollarSign} alt="" />
        </div>
        <h4>33k</h4>
        <p>Mopnthly Produduct Sale</p>
      </div>
      <div className="border rounded p-4 text-center  ">
        <div className=" statistic-img mx-auto rounded-pill  bg-black mb-3">
          <img src={icShoppingBag} alt="" />
        </div>
        <h4>45.5k</h4>
        <p>Customer active in our site</p>
      </div>
      <div className="border rounded p-4 text-center  ">
        <div className="statistic-img  mx-auto rounded-pill mb-3 bg-black">
          <img src={icMoneyBag} alt="" />
        </div>
        <h4>25k</h4>
        <p>Anual gross sale in our site</p>
      </div>
    </div>
  );
};
