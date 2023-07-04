import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteToDo } from "../store";

function Detail() {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  const toDo = toDos.reducer.find((todo) => todo.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDel = () => {
    dispatch(deleteToDo(id));
    navigate("/");
  };
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
      <button onClick={handleDel}>delete</button>
    </>
  );
}
export default Detail;
