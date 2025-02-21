import React, { useState } from "react";

const Activity2 = () => {
  const [todos, setTodos] = useState(["Sweeping"]);
  const clickHandler = () => {
    let todoInput = document.getElementById("todoInput").value;

    todos.map((todo) => {
      if (todo === todoInput) {
        alert("Error! Duplicate Task");
        todoInput = document.getElementById("todoInput").value = "";
        todoInput = "";
      }
    });
    if (todoInput === "") {
      alert("Input field must not be empty!");
    } else {
      setTodos([...todos, todoInput]);
      todoInput = document.getElementById("todoInput").value = "";
    }
  };
  return (
    <section>
      <h1>To do List</h1>
      <input type="text" id="todoInput" />
      <div>
        <ol>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ol>
      </div>
      <button onClick={clickHandler}>Add To Do</button>
    </section>
  );
};

export default Activity2;
