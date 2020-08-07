import {
  FETCH_PRODUCTS,
  FETCH_SORT_TYPES,
  SORT_DATA,
  ProductState,
  ProductActionTypes,
} from "../types";

const initailState: ProductState = {
  products: [],
  sortTypes: [],
};

const productReducer = (state = initailState, action: ProductActionTypes) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_SORT_TYPES:
      return {
        ...state,
        sortTypes: action.payload,
      };
    case SORT_DATA:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
