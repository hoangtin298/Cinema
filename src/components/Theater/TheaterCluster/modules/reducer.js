import * as actionTypes from "./constant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const theaterClusterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_THEATER_CLUSTER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.GET_THEATER_CLUSTER_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.GET_THEATER_CLUSTER_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
