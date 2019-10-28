import React from "react";

const Bottom = props => (
  <ol>
    {props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ol>
);

export default Bottom;
