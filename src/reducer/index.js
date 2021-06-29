import { combineReducers } from "redux";
import { movieListReducer } from "../components/Movie/modules/reducer";

export const rootReducer = combineReducers({
  movieListReducer,
});
