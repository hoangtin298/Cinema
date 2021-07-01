import axios from "axios";
import * as actionTypes from "./constant";

export const actGetTheaterClusterApi = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(actGetTheaterClusterRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap`,
      method: "GET",
      params: {
        maHeThongRap,
        maNhom: "GP09",
      },
    })
      .then((result) => {
        dispatch(actGetTheaterClusterSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetTheaterClusterFailed(error));
      });
  };
};

const actGetTheaterClusterRequest = () => {
  return {
    type: actionTypes.GET_THEATER_CLUSTER_REQUEST,
  };
};

const actGetTheaterClusterSuccess = (theaterClusters) => {
  return {
    type: actionTypes.GET_THEATER_CLUSTER_SUCCESS,
    payload: theaterClusters,
  };
};

const actGetTheaterClusterFailed = (error) => {
  return {
    type: actionTypes.GET_THEATER_CLUSTER_FAILED,
    payload: error,
  };
};
