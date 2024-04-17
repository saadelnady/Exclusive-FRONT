import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { categoryTitle, subCategoryTitle } = useParams();
  console.log(subCategoryTitle);
  console.log(categoryTitle);
  return (
    <div>
      {categoryTitle}/{subCategoryTitle}
    </div>
  );
};

export default Index;
