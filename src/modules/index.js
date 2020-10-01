import { combineReducers } from "redux";
import counter, { counterSaga } from "./couter";
import todoReduce, { todoSaga } from "./posts";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ counter, todoReduce });
export function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootReducer;
