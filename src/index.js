import { legacy_createStore } from "redux";
//react-redux 아님!
// data를 넣는 장소
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

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

const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe: store 안에 있는 변화 감지
countStore.subscribe(onChange);

// dispatch: Reducer에게 Action을 보내는 방법
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
