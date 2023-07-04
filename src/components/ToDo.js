import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const onClick = (e) => {
    const id = e.target.parentElement.id;
    dispatch(deleteToDo(id));
  };

  return (
    <li id={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}
export default ToDo;
