import { combineReducers } from "redux";
import { movieListReducer } from "../components/Movie/modules/reducer";
import { theaterSystemReducer } from "../components/Theater/TheaterSystem/modules/reducer";
import { theaterClusterReducer } from "../components/Theater/TheaterCluster/modules/reducer";

export const rootReducer = combineReducers({
  movieListReducer,
  theaterSystemReducer,
  theaterClusterReducer,
});
