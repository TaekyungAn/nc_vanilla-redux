import { createAction, createReducer } from "@reduxjs/toolkit";
import { combineReducers, legacy_createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");
console.log(addToDo, deleteToDo);

/*const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    default:
      return state;
  }
};*/

//변경 전
// toolkit으로 state mutate 가능
/*const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    // 강의에는 return이 없지만 그러면 작동 안됨. 그래서 추가하니 작동함
    return state.filter((toDo) => toDo.id !== parseInt(action.payload));
  },
});*/

// 경고: createReducer.ts:228 The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer
// 변경 후
const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) => {
      return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    });
});

const persistConfig = {
  key: "todo", //localStorage에 저장될 key값
  storage: storage,
};
const allReducer = combineReducers({
  reducer,
});
const store = legacy_createStore(persistReducer(persistConfig, allReducer));

export default store;
