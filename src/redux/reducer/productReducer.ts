import { FETCH_DATA, ProductState, ProductActionTypes } from "../types";

const initailState: ProductState = {
  products: [],
};

const productReducer = (state = initailState, action: ProductActionTypes) => {
  console.log("action", action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
