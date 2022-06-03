import { selectData } from "./reducer";
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
import { combineReducers } from "redux";

// const reducer = combineReducers({
//   uploadData: uploadData,
// });

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;

export default combineReducers({
  selectData,
});
