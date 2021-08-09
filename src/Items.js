import React from "react";
const { v4: uuidv4 } = require("uuid");
export default function Items({ storedTodo }) {
  return (
    <>
      {storedTodo.map((element) => {
        return (
          <>
            <div className="to-do-elements">
              <input type="checkbox" />
              <li key={uuidv4()}>{element.name}</li>
              <button className="delete-button">delete</button>
            </div>
          </>
        );
      })}
    </>
  );
}
