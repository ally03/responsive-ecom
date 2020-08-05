// interface image {
//   url: string;
//   summary: string;
// }

// interface result {
//   badgeImageUrl: string;
//   images: image[];
// }

export interface Product {
  results: string;
}

export interface ProductState {
  products: Product[];
}

export const FETCH_DATA = "FETCH_DATA";

interface FetchData {
  type: typeof FETCH_DATA;
  payload: Product[];
}

export type ProductActionTypes = FetchData;
