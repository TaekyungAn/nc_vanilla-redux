import { legacy_createStore } from "redux";
//react-redux 아님!
// data를 넣는 장소
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer: data를 modify하는 함수
const reducer = (state = 0) => {
  return state;
};
const countStore = legacy_createStore(reducer);
console.log(countStore.getState());
