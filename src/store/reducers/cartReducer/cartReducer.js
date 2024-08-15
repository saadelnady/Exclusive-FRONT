import { CART_ACTIONS_TYPES } from "../../actions/actionTypes";
const initialValues = {
  isLoading: false,
  cart: { products: [] },
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

        cart: { ...action?.payLoad?.data?.cart },
        error: null,
      };
    case CART_ACTIONS_TYPES.ADD_TO_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================
    case CART_ACTIONS_TYPES.GET_CART:
      return { ...state, isLoading: true };
    case CART_ACTIONS_TYPES.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: action?.payLoad,
        error: null,
      };
    case CART_ACTIONS_TYPES.GET_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================
    case CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART:
      return { ...state, isLoading: true };
    case CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: { ...action?.payLoad },
        error: null,
      };
    case CART_ACTIONS_TYPES.DELETE_PRODUCT_FROM_CART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
      };
    //   =====================================================================

    case CART_ACTIONS_TYPES.UPDATE_SELECTED_PRODUCT_COUNT:
      const updatedProducts = state?.cart?.products?.map((product) =>
        product?._id === action?.payLoad?.productId
          ? {
              ...product,
              selectedCount:
                action.payLoad.selectedCount <= 0
                  ? 1
                  : action.payLoad.selectedCount,
              subTotal:
                action.payLoad.selectedCount <= 0
                  ? 1 * product?.option?.price?.finalPrice
                  : action.payLoad.selectedCount *
                    product?.option?.price?.finalPrice,
            }
          : product
      );

      return {
        ...state,
        cart: {
          ...state.cart,
          products: updatedProducts,
          totalPriceBeforeDiscount: updatedProducts.reduce((acc, item) => {
            const itemTotalPriceBeforeDiscount =
              item.option.price.priceBeforeDiscount * item.selectedCount;

            return acc + itemTotalPriceBeforeDiscount;
          }, 0),

          totalDiscount: updatedProducts.reduce((acc, item) => {
            const discountPerItem =
              item.option.price.priceBeforeDiscount -
              item.option.price.finalPrice;
            const itemDiscount = discountPerItem * item.selectedCount;

            if (!isNaN(itemDiscount) && itemDiscount > 0) {
              return acc + itemDiscount;
            }
            return acc;
          }, 0),

          totalFinalPrice:
            updatedProducts.reduce(
              (acc, item) =>
                acc + item.selectedCount * item.option.price.finalPrice,
              0
            ) + state.cart.shipping,
        },
      };

    default:
      return state;
  }
};

export { cartReducer };
