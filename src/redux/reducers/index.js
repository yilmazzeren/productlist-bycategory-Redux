// reducer'ları bir arada toplama

import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer"


const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer
});

export default rootReducer;
