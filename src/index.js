import { legacy_createStore } from "redux";
//react-redux 아님!
// data를 넣는 장소
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer: data를 modify하는 함수
// action: reducer와 소통하기 위한 방법
const reducer = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else return count;
};
const countStore = legacy_createStore(reducer);

// dispatch: Reducer에게 Action을 보내는 방법
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
