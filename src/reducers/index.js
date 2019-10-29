import { combineReducers } from "redux";
import UserReducer from "./reducer-users";
import ActiveUserReducer from "./reducer-active-user";
import MovieReducer from "./reducer-movies";

const AllReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
  movies: MovieReducer
});

export default AllReducers;
