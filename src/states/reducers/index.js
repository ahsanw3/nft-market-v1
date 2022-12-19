import { combineReducers } from "redux";

import themeModeReducer from "./themeModeReducer";

const reducers = combineReducers({
  theme: themeModeReducer
})
export default reducers