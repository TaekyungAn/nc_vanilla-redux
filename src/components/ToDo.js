import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onClick = (e) => {
    const id = e.target.parentElement.id;
    dispatch(deleteToDo(id));
  };

  return (
    <li id={id}>
      {text}
      <button onClick={onClick}>DEL</button>
    </li>
  );
}
export default ToDo;
