import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSeller } from "../../../store/actions/seller/sellerActions";

const Index = () => {
  const { seller } = useSelector((state) => state.sellerReducer);
  const sellerProducts = seller?.products;
  const { sellerId } = useParams();
  console.log("seller", seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSeller(sellerId));
  }, [dispatch, sellerId]);
  return <div></div>;
};

export default Index;
