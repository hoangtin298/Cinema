import axios from "axios";
import * as actionTypes from "./constant";

export const actGetTheaterSystemApi = () => {
  return (dispatch) => {
    dispatch(actGetTheaterSystemRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actGetTheaterSystemSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetTheaterSystemFailed(error));
      });
  };
};

const actGetTheaterSystemRequest = () => {
  return {
    type: actionTypes.GET_THEATER_SYSTEM_REQUEST,
  };
};

const actGetTheaterSystemSuccess = (theaterSystems) => {
  return {
    type: actionTypes.GET_THEATER_SYSTEM_SUCCESS,
    payload: theaterSystems,
  };
};

const actGetTheaterSystemFailed = (error) => {
  return {
    type: actionTypes.GET_THEATER_SYSTEM_FAILED,
    payload: error,
  };
};
