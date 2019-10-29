import React, { useState, useEffect } from "react";
import "./App.css";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import UserList from "./containers/user-list";

function App() {
  /*CONSTANTS - MOCK DATA*/
  const users = [{ id: 0, name: "Carol" }, { id: 1, name: "Barbara" }];
  /*LOCAL STATE*/
  const [currentUser, setCurrentUser] = useState("");
  const [listUsers, setListUsers] = useState(users);
  const [validationMessage, setValidationMessage] = useState("");
  /*CHANGE DETECTION*/
  const onUpdateName = event => {
    if (validationMessage) {
      setValidationMessage("");
    }
    setCurrentUser(event);
  };

  // EFFECT HOOKS -- THINK OF IT AS COMPONENT-DID-MOUNT OR COMPONENT-UPDATED
  useEffect(() => {
    if (validationMessage) {
      console.warn("✋", validationMessage);
    }
  });

  const onButtonClick = event => {
    event.preventDefault();
    if (currentUser === "") {
      // This is async
      setValidationMessage("😐 Cannot be empty");
      // This is sync -- GOOD USE CASE FOR HOOK *USE EFFECT*
      //console.warn('✋', inputValidation); // This would not work
    } else {
      const id = listUsers.length;
      // COPY THE OBJECT -- NOT REFERENCE
      const newListUsers = [...listUsers];
      // Update the new object
      newListUsers.push({
        id: id,
        name: currentUser
      });
      // Replace the previous object
      setListUsers(newListUsers);
      setCurrentUser("");
    }
  };
  /*JSX RENDERER*/
  return (
    <div className="App">
      <h1>Todo Redux</h1>
      <h2>
        <span role="img" aria-label="Emoji symbol">
          ⛔
        </span>
        Original
      </h2>
      <Top
        appCurrentUser={currentUser}
        appValidation={validationMessage}
        appOnUpdateName={onUpdateName}
        appOnButtonClick={onButtonClick}
      />
      <Bottom users={listUsers} />
      <h2>
        <span role="img" aria-label="Emoji symbol">
          😎
        </span>
        The new kid
      </h2>
      <UserList />
    </div>
  );
}

export default App;
