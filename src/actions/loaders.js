export const SET_LOADING_SPINNER = "SET_LOADING_SPINNER";

export function setLoadingSpinner(data) {
    return {
      type: SET_LOADING_SPINNER,
      payload: data
    };
  }