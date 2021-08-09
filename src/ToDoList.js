import React from "react";
import { useRef, useEffect, useState } from "react";
export default function ToDoList() {
  const enteredText = useRef("");
  const [enteredTodo, setEnteredTodo] = useState(() => {
    return null;
  });
  var handleKeyPress = (event) => {
    if (event.key === "Enter") setEnteredTodo(enteredText.current.value);
  };
  useEffect(() => {
    console.log("enteredTodo changed="+enteredTodo);
  }, [enteredTodo]);
  return (
    <div className="to-do-list">
      <h1>Please Enter ToDo here</h1>
      <input
        type="text"
        placeholder="   Please Enter"
        className="input-to-do"
        ref={enteredText}
        onKeyPress={handleKeyPress}
      ></input>
      <button className="enter-button">Add</button>
    </div>
  );
}
