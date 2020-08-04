import { FETCH_DATA, ProductState } from "../types";

const initailState: ProductState = {
  products: [],
};

const productReducer = (state = initailState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        products: action.payload.results,
      };
    default:
      return state;
  }
};

export default productReducer;
