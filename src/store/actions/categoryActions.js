import { deleteData, getData, postData, putData } from "../../API/API";
import * as actionCreators from "./categoryActionsCreators";

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getCategories);
    try {
      const data = await getData(`/api/categories`);
      console.log(data);

      dispatch(actionCreators.getCategoriesSuccess(data.categories));
    } catch (error) {
      dispatch(actionCreators.getCategoriesFail(error));
    }
  };
};

export const addCategory = (categoryData) => {
  return async (dispatch) => {
    dispatch(actionCreators.addCategory);

    try {
      const data = await postData(`/api/categories`, categoryData);

      dispatch(actionCreators.addCategorySuccess(data.newCategory));
    } catch (error) {
      dispatch(actionCreators.addCategoryFail(error));
    }
  };
};

export const editCategory = (categoryId, updatedCategoryData) => {
  return async (dispatch) => {
    dispatch(actionCreators.editCategory);

    try {
      const data = await putData(
        `/api/categories/${categoryId}`,
        updatedCategoryData
      );

      dispatch(actionCreators.editCategorySuccess(data.updatedCategory));
    } catch (error) {
      dispatch(actionCreators.editCategoryFail(error));
    }
  };
};

export const deleteCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch(actionCreators.deleteCategory);

    try {
      await deleteData(`/api/categories/${categoryId}`);

      dispatch(actionCreators.deleteCategorySuccess(categoryId));
    } catch (error) {
      dispatch(actionCreators.deleteCategoryFail(error));
    }
  };
};
