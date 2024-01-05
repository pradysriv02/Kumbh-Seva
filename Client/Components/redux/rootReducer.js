import { combineReducers } from "redux";
import { reducers } from "./reducer";

const rootReducer = combineReducers({
  reducer: reducers,
});

export default rootReducer;
