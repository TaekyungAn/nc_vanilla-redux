import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
function Home(props) {
  // **React Hook사용**
  // useSelector를 통해 store의 state를 바로 가져옴
  // const todo = useSelector((state) => state);

  console.log(props);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

// 강의 내용
// connect: store에 있는 값을 Home으로 가져옴
function mapStateToProps(state) {
  return { toDos: state };
}
export default connect(mapStateToProps)(Home);
