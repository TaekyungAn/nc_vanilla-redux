import { legacy_createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);

    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

store.subscribe();

export default store;
