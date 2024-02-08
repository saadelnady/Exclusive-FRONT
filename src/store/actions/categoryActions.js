import { deleteData, getData, postData, putData } from "../../API/API";
import { showToast } from "../../helpers/toast_helper";
import * as actionCreators from "./categoryActionsCreators";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(actionCreators.getCategories);
    try {
      const data = await getData(`/api/categories`);
      console.log(data);
      dispatch(actionCreators.getCategoriesSuccess(data.data.categories));
    } catch (error) {
      dispatch(actionCreators.getCategoriesFail(error));
    }
  };
};

export const addCategory = ({ formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionCreators.addCategory(formData));
    try {
      const response = await postData(`/api/categories`, formData);
      dispatch(actionCreators.addCategorySuccess(response));
      showToast(toast, response?.message, "success");
    } catch (error) {
      console.log("errorrrrrrr from categoryActions", error);
      dispatch(actionCreators.addCategoryFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};

export const editCategory = ({ categoryId, formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionCreators.editCategory(formData));

    try {
      const response = await putData(`/api/categories/${categoryId}`, formData);
      dispatch(actionCreators.editCategorySuccess(response?.data));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionCreators.editCategoryFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};

export const deleteCategory = ({ categoryId, toast }) => {
  return async (dispatch) => {
    dispatch(actionCreators.deleteCategory);

    try {
      const response = await deleteData(`/api/categories/${categoryId}`);
      dispatch(actionCreators.deleteCategorySuccess(response.data));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionCreators.deleteCategoryFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
