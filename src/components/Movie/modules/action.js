import axios from "axios";
import * as actionTypes from "./constant";

export const actGetMovieListApi = (startDate, endDate) => {
  return (dispatch) => {
    dispatch(actGetMovieListRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay`,
      method: "GET",
      params: {
        maNhom: "GP09",
        soTrang: 1,
        soPhanTuTrenTrang: 100,
        tuNgay: startDate,
        denNgay: endDate,
      },
    })
      .then((result) => {
        dispatch(actGetMovieListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetMovieListFailed(error));
      });
  };
};

const actGetMovieListRequest = () => {
  return {
    type: actionTypes.GET_MOVIE_LIST_REQUEST,
  };
};

const actGetMovieListSuccess = (movieList) => {
  return {
    type: actionTypes.GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};

const actGetMovieListFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_LIST_FAILED,
    payload: error,
  };
};
