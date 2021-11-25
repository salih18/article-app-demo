import { combineReducers } from "redux";
import auth from "./auth";
import article from "./article";

export default combineReducers({
  auth,
  article,
});
