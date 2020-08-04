export interface Product {
  name: string;
  url: string;
}

export interface ProductState {
  products: Product[];
}
export const FETCH_DATA = "FETCH_DATA";

interface FetchData {
  type: typeof FETCH_DATA;
  payload: string;
}

export type ProductActionTypes = FetchData;
