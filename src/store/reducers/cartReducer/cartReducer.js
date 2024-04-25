import { CART_ACTIONS_TYPES } from "../../actions/actionTypes";
const initialValues = {
  isLoading: false,
  cartItem: null,
  cart: [], // Ensure cart is initialized as an array
  message: "",
  error: null,
};

const cartReducer = (state = initialValues, action) => {
  switch (action.type) {
    case CART_ACTIONS_TYPES.ADD_TO_CART:
      return { ...state, isLoading: true };
    case CART_ACTIONS_TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartItem: action.payLoad.data.cartItem,
        cart: [...state.cart, action.payLoad.data.cartItem],
        message: action.payLoad.data.message,
        error: null,
      };
    case CART_ACTIONS_TYPES.ADD_TO_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
        message: action.payLoad,
      };
    //   =====================================================================
    case CART_ACTIONS_TYPES.GET_CART:
      return { ...state, isLoading: true };
    case CART_ACTIONS_TYPES.GET_CART_SUCCESS:
      console.log("res ===", action.payLoad);
      return {
        ...state,
        isLoading: false,
        cart: action.payLoad.data.cart.items,
        error: null,
      };
    case CART_ACTIONS_TYPES.GET_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
        message: action.payLoad,
      };
    default:
      return state;
  }
};

export { cartReducer };
