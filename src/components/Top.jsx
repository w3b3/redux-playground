import React from "react";

const Top = (props) => {
  const { show } = props;

  return show ? (
    <header style={{ display: "flex", flexDirection: "column" }}>
      I'm the header
    </header>
  ) : null;
};
export default Top;
