import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";
function Home(props) {
  // **React Hook사용**
  // useSelector를 통해 store의 state를 바로 가져옴 (mapStateToProps 대체: getState기능)
  const toDos = useSelector((state) => state);
  // useDispatch는 mapDispatchToProps 대체: Redux store에서 dispatch 함수에 대한 참조를 반환
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;
