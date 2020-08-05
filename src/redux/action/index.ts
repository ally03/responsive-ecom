import { FETCH_DATA } from "../types";
import { Dispatch } from "redux";

export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    let request = await fetch("./testjoulesdata.json");
    let response = await request.json();
    dispatch({
      type: FETCH_DATA,
      payload: response.results,
    });
  } catch (error) {
    console.log("error", error);
  }
};
