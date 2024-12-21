const USER_ACTIONS_TYPES = {
  GET_USER: "GET_USER",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAIL: "GET_USER_FAIL",
  // =====================================
  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_USER_PROFILE_SUCCESS: "GET_USER_PROFILE_SUCCESS",
  GET_USER_PROFILE_FAIL: "GET_USER_PROFILE_FAIL",
  // =====================================
  POST_USER_LOGIN: "POST_USER_LOGIN",
  POST_USER_LOGIN_SUCCESS: "POST_USER_LOGIN_SUCCESS",
  POST_USER_LOGIN_FAIL: "POST_USER_LOGIN_FAIL",
  // =====================================
  POST_USER_REGISTER: "POST_USER_REGISTER",
  POST_USER_REGISTER_SUCCESS: "POST_USER_REGISTER_SUCCESS",
  POST_USER_REGISTER_FAIL: "POST_USER_REGISTER_FAIL",
  // =====================================
  POST_USER_LOGOUT: "POST_USER_LOGOUT",
  POST_USER_LOGOUT_SUCCESS: "POST_USER_LOGOUT_SUCCESS",
  POST_USER_LOGOUT_FAIL: "POST_USER_LOGOUT_FAIL",
  // =====================================
  PUT_USER_PROFILE: "PUT_USER_PROFILE",
  PUT_USER_PROFILE_SUCCESS: "PUT_USER_PROFILE_SUCCESS",
  PUT_USER_PROFILE_FAIL: "PUT_USER_PROFILE_FAIL",
};
const USERS_ACTIONS_TYPES = {
  GET_USERS: "GET_USERS",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_FAIL: "GET_USERS_FAIL",
};
// ===============================================================
const PRODUCT_ACTIONS_TYPES = {
  GET_PRODUCT: "GET_PRODUCT",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_FAIL: "GET_PRODUCT_FAIL",
  // =====================================
  CLEAR_PRODUCT: "CLEAR_PRODUCT",
  CLEAR_PRODUCT_SUCCESS: "CLEAR_PRODUCT_SUCCESS",
  CLEAR_PRODUCT_FAIL: "CLEAR_PRODUCT_FAIL",
  // =====================================
  POST_PRODUCT: "POST_PRODUCT",
  POST_PRODUCT_SUCCESS: "POST_PRODUCT_SUCCESS",
  POST_PRODUCT_FAIL: "POST_PRODUCT_FAIL",
  // =====================================
  PUT_PRODUCT: "PUT_PRODUCT",
  PUT_PRODUCT_SUCCESS: "PUT_PRODUCT_SUCCESS",
  PUT_PRODUCT_FAIL: "PUT_PRODUCT_FAIL",
  // =====================================
  DELETE_PRODUCT: "DELETE_PRODUCT",
  DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
  DELETE_PRODUCT_FAIL: "DELETE_PRODUCT_FAIL",
  // =====================================
  PUT_ACCEPT_PRODUCT: "PUT_ACCEPT_PRODUCT",
  PUT_ACCEPT_PRODUCT_SUCCESS: "PUT_ACCEPT_PRODUCT_SUCCESS",
  PUT_ACCEPT_PRODUCT_FAIL: "PUT_ACCEPT_PRODUCT_FAIL",
  // =====================================
  PUT_BLOCK_PRODUCT: "PUT_BLOCK_PRODUCT",
  PUT_BLOCK_PRODUCT_SUCCESS: "PUT_BLOCK_PRODUCT_SUCCESS",
  PUT_BLOCK_PRODUCT_FAIL: "PUT_BLOCK_PRODUCT_FAIL",
  // =====================================
  PUT_UNBLOCK_PRODUCT: "PUT_UNBLOCK_PRODUCT",
  PUT_UNBLOCK_PRODUCT_SUCCESS: "PUT_UNBLOCK_PRODUCT_SUCCESS",
  PUT_UNBLOCK_PRODUCT_FAIL: "PUT_UNBLOCK_PRODUCT_FAIL",
};
// ===============================================================

const PRODUCTS_ACTIONS_TYPES = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAIL: "GET_PRODUCTS_FAIL",
  // =====================================
  GET_SEARCHED_PRODUCTS: "GET_SEARCHED_PRODUCTS",
  GET_SEARCHED_PRODUCTS_SUCCESS: "GET_SEARCHED_PRODUCTS_SUCCESS",
  GET_SEARCHED_PRODUCTS_FAIL: "GET_SEARCHED_PRODUCTS_FAIL",
  // =====================================
  GET_ACCEPTED_SELLER_PRODUCTS: "GET_ACCEPTED_SELLER_PRODUCTS",
  GET_ACCEPTED_SELLER_PRODUCTS_SUCCESS: "GET_ACCEPTED_SELLER_PRODUCTS_SUCCESS",
  GET_ACCEPTED_SELLER_PRODUCTS_FAIL: "GET_ACCEPTED_SELLER_PRODUCTS_FAIL",
  // =====================================
  GET_SELLER_PRODUCTS: "GET_SELLER_PRODUCTS",
  GET_SELLER_PRODUCTS_SUCCESS: "GET_SELLER_PRODUCTS_SUCCESS",
  GET_SELLER_PRODUCTS_FAIL: "GET_SELLER_PRODUCTS_FAIL",
  // =====================================
  GET_FLASH_SALES_PRODUCTS: "GET_FLASH_SALES_PRODUCTS",
  GET_FLASH_SALES_PRODUCTS_SUCCESS: "GET_FLASH_SALES_PRODUCTS_SUCCESS",
  GET_FLASH_SALES_PRODUCTS_FAIL: "GET_FLASH_SALES_PRODUCTS_FAIL",
};
// ===============================================================

const SELLER_ACTIONS_TYPES = {
  GET_SELLER: "GET_SELLER",
  GET_SELLER_SUCCESS: "GET_SELLER_SUCCESS",
  GET_SELLER_FAIL: "GET_SELLER_FAIL",
  // =====================================
  GET_SELLER_PROFILE: "GET_SELLER_PROFILE",
  GET_SELLER_PROFILE_SUCCESS: "GET_SELLER_PROFILE_SUCCESS",
  GET_SELLER_PROFILE_FAIL: "GET_SELLER_PROFILE_FAIL",
  // =====================================
  PUT_SELLER_PROFILE: "PUT_SELLER_PROFILE",
  PUT_SELLER_PROFILE_SUCCESS: "PUT_SELLER_PROFILE_SUCCESS",
  PUT_SELLER_PROFILE_FAIL: "PUT_SELLER_PROFILE_FAIL",
  // =====================================
  POST_SELLER_LOGIN: "POST_SELLER_LOGIN",
  POST_SELLER_LOGIN_SUCCESS: "POST_SELLER_LOGIN_SUCCESS",
  POST_SELLER_LOGIN_FAIL: "POST_SELLER_LOGIN_FAIL",
  // =====================================
  POST_SELLER_REGISTER: "POST_SELLER_REGISTER",
  POST_SELLER_REGISTER_SUCCESS: "POST_SELLER_REGISTER_SUCCESS",
  POST_SELLER_REGISTER_FAIL: "POST_SELLER_REGISTER_FAIL",
  // =====================================
  POST_SELLER_LOGOUT: "POST_SELLER_LOGOUT",
  POST_SELLER_LOGOUT_SUCCESS: "POST_SELLER_LOGOUT_SUCCESS",
  POST_SELLER_LOGOUT_FAIL: "POST_SELLER_LOGOUT_FAIL",
};
const SELLERS_ACTIONS_TYPES = {
  GET_SELLERS: "GET_SELLERS",
  GET_SELLERS_SUCCESS: "GET_SELLERS_SUCCESS",
  GET_SELLERS_FAIL: "GET_SELLERS_FAIL",
};
// ======================================================

const CATEGORY_ACTIONS_TYPES = {
  GET_CATEGORY: "GET_CATEGORY",
  GET_CATEGORY_SUCCESS: "GET_CATEGORY_SUCCESS",
  GET_CATEGORY_FAIL: "GET_CATEGORY_FAIL",
  // ===============================================
  POST_CATEGORY: "POST_CATEGORY",
  POST_CATEGORY_SUCCESS: "POST_CATEGORY_SUCCESS",
  POST_CATEGORY_FAIL: "POST_CATEGORY_FAIL",
  // ===============================================
  PUT_CATEGORY: "PUT_CATEGORY",
  PUT_CATEGORY_SUCCESS: "PUT_CATEGORY_SUCCESS",
  PUT_CATEGORY_FAIL: "PUT_CATEGORY_FAIL",
  // ===============================================
  DELETE_CATEGORY: "DELETE_CATEGORY",
  DELETE_CATEGORY_SUCCESS: "DELETE_CATEGORY_SUCCESS",
  DELETE_CATEGORY_FAIL: "DELETE_CATEGORY_FAIL",
};

const CATEGORIES_ACTIONS_TYPES = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
  GET_CATEGORIES_FAIL: "GET_CATEGORIES_FAIL",
};

// ======================================================

const SUBCATEGORY_ACTIONS_TYPES = {
  GET_SUBCATEGORY: "GET_SUB_CATEGORY",
  GET_SUBCATEGORY_SUCCESS: "GET_SUBCATEGORY_SUCCESS",
  GET_SUBCATEGORY_FAIL: "GET_SUBCATEGORY_FAIL",
  // ===============================================
  POST_SUBCATEGORY: "POST_SUBCATEGORY",
  POST_SUBCATEGORY_SUCCESS: "POST_SUBCATEGORY_SUCCESS",
  POST_SUBCATEGORY_FAIL: "POST_SUBCATEGORY_FAIL",
  // ===============================================
  PUT_SUBCATEGORY: "PUT_SUBCATEGORY",
  PUT_SUBCATEGORY_SUCCESS: "PUT_SUBCATEGORY_SUCCESS",
  PUT_SUBCATEGORY_FAIL: "PUT_SUBCATEGORY_FAIL",
  // ===============================================
  DELETE_SUBCATEGORY: "DELETE_SUBCATEGORY",
  DELETE_SUBCATEGORY_SUCCESS: "DELETE_SUBCATEGORY_SUCCESS",
  DELETE_SUBCATEGORY_FAIL: "DELETE_SUBCATEGORY_FAIL",
};

const SUBCATEGORIES_ACTIONS_TYPES = {
  GET_SUBCATEGORIES: "GET_SUBCATEGORIES",
  GET_SUBCATEGORIES_SUCCESS: "GET_SUBCATEGORIES_SUCCESS",
  GET_SUBCATEGORIES_FAIL: "GET_SUBCATEGORIES_FAIL",
};
// ======================================================
const COUPON_CODE_ACTIONS_TYPES = {
  POST_COUPON_CODE: "POST_COUPON_CODE",
  POST_COUPON_CODE_SUCCESS: "POST_COUPON_CODE_SUCCESS",
  POST_COUPON_CODE_FAIL: "POST_COUPON_CODE_FAIL",
};

const COUPONS_ACTIONS_TYPES = {
  GET_SELLER_COUPONS: "GET_SELLER_COUPONS",
  GET_SELLER_COUPONS_SUCCESS: "GET_SELLER_COUPONS_SUCCESS",
  GET_SELLER_COUPONS_FAIL: "GET_SELLER_COUPONS_FAIL",
};
// ======================================================
const CART_ACTIONS_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  ADD_TO_CART_SUCCESS: "ADD_TO_CART_SUCCESS",
  ADD_TO_CART_FAIL: "ADD_TO_CART_FAIL",
  // ===============================================
  GET_CART: "GET_CART",
  GET_CART_SUCCESS: "GET_CART_SUCCESS",
  GET_CART_FAIL: "GET_CART_FAIL",
  // ===============================================
  DELETE_PRODUCT_FROM_CART: "DELETE_PRODUCT_FROM_CART",
  DELETE_PRODUCT_FROM_CART_SUCCESS: "DELETE_PRODUCT_FROM_CART_SUCCESS",
  DELETE_PRODUCT_FROM_CART_FAIL: "DELETE_PRODUCT_FROM_CART_FAIL",
  // ===============================================
  PUT_CART: "PUT_CART",
  PUT_CART_SUCCESS: "PUT_CART_SUCCESS",
  PUT_CART_FAIL: "PUT_CART_FAIL",
};
// ======================================================

const WISHLIST_ACTIONS_TYPES = {
  ADD_PRODUCT_TO_WISHLIST: "ADD_PRODUCT_TO_WISHLIST",
  ADD_PRODUCT_TO_WISHLIST_SUCCESS: "ADD_PRODUCT_TO_WISHLIST_SUCCESS",
  ADD_PRODUCT_TO_WISHLIST_FAIL: "ADD_PRODUCT_TO_WISHLIST_FAIL",
  // ===============================================
  GET_WISHLIST: "GET_WISHLIST",
  GET_WISHLIST_SUCCESS: "GET_WISHLIST_SUCCESS",
  GET_WISHLIST_FAIL: "GET_WISHLIST_FAIL",
  // ===============================================
  DELETE_PRODUCT_FROM_WISHLIST: "DELETE_PRODUCT_FROM_WISHLIST",
  DELETE_PRODUCT_FROM_WISHLIST_SUCCESS: "DELETE_PRODUCT_FROM_WISHLIST_SUCCESS",
  DELETE_PRODUCT_FROM_WISHLIST_FAIL: "DELETE_PRODUCT_FROM_WISHLIST_FAIL",
};

const THEME_ACTIONS_TYPES = {
  SET_THEME: "SET_THEME",
  SET_THEME_SUCCESS: "SET_THEME_SUCCESS",
  SET_THEME_FAIL: "SET_THEME_FAIL",
};

export {
  USER_ACTIONS_TYPES,
  USERS_ACTIONS_TYPES,
  PRODUCT_ACTIONS_TYPES,
  PRODUCTS_ACTIONS_TYPES,
  SELLER_ACTIONS_TYPES,
  SELLERS_ACTIONS_TYPES,
  CATEGORIES_ACTIONS_TYPES,
  CATEGORY_ACTIONS_TYPES,
  SUBCATEGORIES_ACTIONS_TYPES,
  SUBCATEGORY_ACTIONS_TYPES,
  COUPON_CODE_ACTIONS_TYPES,
  COUPONS_ACTIONS_TYPES,
  CART_ACTIONS_TYPES,
  WISHLIST_ACTIONS_TYPES,
  THEME_ACTIONS_TYPES,
};
