import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../../../store/actions/category/categoryActions";
import Loading from "../../Shared/Loading";
import Tabs from "../../Shared/Tabs";

const Index = () => {
  const { category, isLoading } = useSelector((state) => state.categoryReducer);
  const { categoryId, subCategoryId } = useParams();
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory(categoryId));
  }, [categoryId]);
  return (
    <div className="container py-2 ">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h5 className="special-header ps-5 py-2 ">{category?.title} </h5>
          <Tabs tabs={category?.subCategories} Id={category?._id} />
        </div>
      )}
    </div>
  );
};

export default Index;
