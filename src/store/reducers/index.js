import { combineReducers } from "redux";
import home from "./Home";
import my from "./My";
import find from "./Find";
import global from "./Global";

export default combineReducers({
  home,
  my,
  find,
  global
});
