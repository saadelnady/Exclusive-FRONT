import { deleteData, getData, postData, putData } from "../../../API/API";
import { showToast } from "../../../helpers/toast_helper";
import * as actionsCreators from "./subCategoriesActionsCreator";
export const fetchSubCategories = ({ page, limit }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.getSubCategories());
    try {
      const response = await getData(
        `/api/subCategories?limit=${limit}&page=${page}`
      );

      dispatch(actionsCreators.getSubCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(actionsCreators.getSubCategoriesFail(error));
    }
  };
};
// =========================================================================================

export const fetchSubCategory = (subCategoryId) => {
  return async (dispatch) => {
    console.log("subCategoryId ---- > ", subCategoryId);
    dispatch(actionsCreators.getSubCategories(subCategoryId));
    try {
      const response = await getData(`/api/subCategories/${subCategoryId}`);
      console.log("response ---- > ", response);

      dispatch(
        actionsCreators.getSubCategorySuccess(response.data.subCategory)
      );
    } catch (error) {
      dispatch(actionsCreators.getSubCategoryFail(error));
    }
  };
};
// =========================================================================================
export const addSubCategory = ({ formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.addSubCategory(formData));
    try {
      const response = await postData(`/api/subCategories`, formData);
      dispatch(actionsCreators.addSubCategorySuccess(response));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(
        actionsCreators.addSubCategoryFail(error?.response?.data?.message)
      );
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// =========================================================================================
export const editSubCategory = ({ subCategoryId, formData, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.editSubCategory(formData));

    try {
      const response = await putData(
        `/api/subCategories/${subCategoryId}`,
        formData
      );
      console.log("response === >", response);
      dispatch(
        actionsCreators.editSubCategorySuccess(response?.data?.subCategory)
      );
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionsCreators.editSubCategoryFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
// =========================================================================================

export const deleteSubCategory = ({ subCategoryId, toast }) => {
  return async (dispatch) => {
    dispatch(actionsCreators.deleteSubCategory());

    try {
      const response = await deleteData(`/api/subCategories/${subCategoryId}`);
      dispatch(actionsCreators.deleteSubCategorySuccess(response.data));
      showToast(toast, response?.message, "success");
    } catch (error) {
      dispatch(actionsCreators.deleteSubCategoryFail(error));
      showToast(toast, error?.response?.data?.message, "error");
    }
  };
};
