export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_SORT_TYPES = "FETCH_SORT_TYPES";
export const SORT_DATA = "SORT_DATA";

export interface Product {
  results: string;
}

export interface sortType {
  sort: string;
}

export interface ProductState {
  products: Product[];
  sortTypes: sortType[];
}

interface FetchData {
  type: typeof FETCH_PRODUCTS;
  payload: Product[];
}

interface FetchSort {
  type: typeof FETCH_SORT_TYPES;
  payload: sortType[];
}

interface FilterData {
  type: typeof SORT_DATA;
  payload: Product[];
}

export type ProductActionTypes = FetchData | FetchSort | FilterData;
