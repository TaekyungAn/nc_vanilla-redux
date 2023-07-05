import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { combineReducers, legacy_createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");
console.log(addToDo, deleteToDo);

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
  storage,
};
const rootReducer = combineReducers({
  reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
