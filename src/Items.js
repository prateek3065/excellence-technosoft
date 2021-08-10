import React from "react";
const { v4: uuidv4 } = require("uuid");
export default function Items({ storedTodo, handleToggleToDo }) {
  var handleonChange = (id) => {
    handleToggleToDo(id);
  };
  return (
    <>
      {storedTodo.map((element) => {
        return (
          <div key={uuidv4()} className="to-do-elements">
            <input
              type="checkbox"
              checked={element.complete}
              onChange={() => handleonChange(element.id)}
            />
            <li>{element.name}</li>
            <button className="delete-button">delete</button>
          </div>
        );
      })}
    </>
  );
}
