import React from "react";
import Todo from "./Todo";
// import Header from "./header";

export default function Todolist({ todos }) {
  return (
    <>
      {/* {todos.sort((a, b) => b - a)}; */}
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </>
  );
}
