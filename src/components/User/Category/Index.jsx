import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { categoryTitle } = useParams();
  console.log("categoryTitle ====>", categoryTitle);
  return <div className="container">{categoryTitle}</div>;
};

export default Index;
