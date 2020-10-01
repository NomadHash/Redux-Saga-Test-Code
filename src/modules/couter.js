import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

//ACTION_TYPES
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

//ACTION_CREATOR_FUNCTION
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

//* SAGA_FUNCTIONS
function* increaseSaga() {
  yield put(increase());
}

function* decreaseSaga() {
  yield put(decrease());
}

//* WATCHER_SAGA
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

//INIT_VALUE
const initialState = 0;

// REDUCER
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
