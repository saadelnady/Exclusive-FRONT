import { deleteData, getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./categoryActionsCreators";
// =========================================================================================

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(actionsCreators.getCategories());
    try {
      const response = await getData(`/api/categories`);
      dispatch(actionsCreators.getCategoriesSuccess(response.data.categories));
    } catch (error) {
      dispatch(actionsCreators.getCategoriesFail(error));
    }
  };
};
// =========================================================================================

export const addCategory = ({ formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.addCategory(formData));
    try {
      const response = await postData(`/api/categories`, formData);
      dispatch(actionsCreators.addCategorySuccess(response));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionsCreators.addCategoryFail(error?.response?.data?.message));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// =========================================================================================

export const editCategory = ({ categoryId, formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editCategory(formData));

    try {
      const response = await putData(`/api/categories/${categoryId}`, formData);
      dispatch(actionsCreators.editCategorySuccess(response?.data));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionsCreators.editCategoryFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// =========================================================================================

export const deleteCategory = ({ categoryId, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteCategory());

    try {
      const response = await deleteData(`/api/categories/${categoryId}`);
      dispatch(actionsCreators.deleteCategorySuccess(response.data));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionsCreators.deleteCategoryFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
