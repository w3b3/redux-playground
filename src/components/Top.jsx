import React from "react";

const Top = (props) => {
  const { show } = props;

  return show ? (
    <header style={{ display: "flex", flexDirection: "column" }}>
      <span>{`I'm the header`}</span>
    </header>
  ) : null;
};
export default Top;
