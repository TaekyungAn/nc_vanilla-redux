import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    },
  },
});

const persistConfig = {
  key: "todo", //localStorage에 저장될 key값
  storage,
};
const rootReducer = combineReducers({
  reducer: toDos.reducer,
});
console.log(toDos.actions);
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore: Redux Developer Tools 사용
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const { add, remove } = toDos.actions;

export default store;
