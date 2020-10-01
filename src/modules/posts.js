import * as postsAPI from "../api/posts";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_TODOS = "GET_TODOS"; // 요청 시작
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"; // 요청 성공
const GET_TODOS_ERROR = "GET_TODOS_ERROR"; // 요청 실패

export const getTodos = () => ({ type: GET_TODOS });

export function* getPostsSaga() {
  try {
    const todos = yield call(postsAPI.getPosts);
    yield put({
      type: GET_TODOS_SUCCESS,
      payload: todos,
    });
  } catch (e) {
    yield put({
      type: GET_TODOS_ERROR,
      payload: e,
    });
  }
}

export function* todoSaga() {
  yield takeEvery(GET_TODOS, getPostsSaga);
}

const initialState = {
  todos: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function todoReduce(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        todos: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
