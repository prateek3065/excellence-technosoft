import React from "react";
import { useRef, useEffect, useState } from "react";
import Items from "./Items";
const { v4: uuidv4 } = require("uuid");
export default function ToDoList() {
  const enteredText = useRef("");
  const [storedTodo, setStoredTodo] = useState(() => {
    const storedList = JSON.parse(localStorage.getItem("todo"));
    if (storedList) return storedList;
    return [];
  });

  var handleKeyPress = (event) => {
    if (event.key === "Enter") {
      //setEnteredTodo((prev)=>enteredText.current.value);

      addTodo();
      enteredText.current.value = "";
    }
  };

  var addTodo = () => {
    const name = enteredText.current.value;
    if (name === "") return;

    //console.log("i am inside addTodo");

    setStoredTodo((prev) => {
      return [...prev, { id: uuidv4(), name: name, complete: false }];
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(storedTodo));
    //console.log(storedTodo);
  }, [storedTodo]);

  return (
    <div>
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
      <div className="items-added">
        <Items storedTodo={storedTodo} />
      </div>
    </div>
  );
}
