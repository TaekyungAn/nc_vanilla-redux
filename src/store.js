import { createAction } from "@reduxjs/toolkit";
import { combineReducers, legacy_createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");
console.log(addToDo, deleteToDo);

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    default:
      return state;
  }
};

const persistConfig = {
  key: "todo", //localStorage에 저장될 key값
  storage: storage,
};
const allReducer = combineReducers({
  reducer,
});
const store = legacy_createStore(persistReducer(persistConfig, allReducer));

export default store;
