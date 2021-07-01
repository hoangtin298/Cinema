import * as actionTypes from "./constant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const theaterSystemReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_THEATER_SYSTEM_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.GET_THEATER_SYSTEM_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.GET_THEATER_SYSTEM_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
