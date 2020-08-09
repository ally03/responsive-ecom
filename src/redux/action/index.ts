import { FETCH_PRODUCTS, FETCH_SORT_TYPES, Product } from "../types";
import { Dispatch } from "redux";

export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    let request = await fetch("./testjoulesdata.json");
    let response = await request.json();
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.results,
    });
    dispatch({
      type: FETCH_SORT_TYPES,
      payload: response.sortTypes,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const filterData = (sort: string, products: Product[]) => {
  const product = products.slice();
  if (sort === "price_asc") {
    product.sort(function (a: Product, b: Product) {
      return a.price.value - b.price.value;
    });
  } else if (sort === "price_des") {
    product.sort(function (a: Product, b: Product) {
      return b.price.value - a.price.value;
    });
  } else if (sort === "product_az") {
    product.sort(function (a: Product, b: Product) {
      return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    });
  } else if (sort === "product_za") {
    product.sort(function (a: Product, b: Product) {
      return a.name === b.name ? 0 : a.name > b.name ? -1 : 1;
    });
  }
  return {
    type: "SORT_DATA",
    payload: product,
  };
};
