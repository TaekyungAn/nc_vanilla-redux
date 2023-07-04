import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";
function Home(props) {
  // **React Hook사용**
  // useSelector를 통해 store의 state를 바로 가져옴 (getState기능)
  const toDo = useSelector((state) => state);
  // useDispatch는 mapDispatchToProps 대체
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
      <ul>{JSON.stringify(toDo)}</ul>
    </>
  );
}

export default Home;
