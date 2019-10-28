import React from "react";

const Top = props => {
  const {
    appOnUpdateName,
    appCurrentUser,
    appValidation,
    appOnButtonClick
  } = props;
  //Lifting up state
  const handleChange = event => appOnUpdateName(event.target.value);

  /*JSX RENDERER*/
  return (
    <header style={{ display: "flex", flexDirection: "column" }}>
      <form style={{ display: "flex" }}>
        <input
          type="text"
          placeholder={appCurrentUser ? "" : "Write something here"}
          value={appCurrentUser}
          onChange={handleChange}
        />
        <button onClick={appOnButtonClick}>Add</button>
      </form>
      <span
        className={`validation ${
          appValidation.length > 0 ? "notHidden" : "hidden"
        }`}
      >
        {appValidation}
      </span>
    </header>
  );
};
export default Top;
