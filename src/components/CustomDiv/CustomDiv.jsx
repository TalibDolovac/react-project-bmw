import React from "react";

const CustomDiv = (props) => {
  return <div style={props.style}>{props.children}</div>;
};

export default CustomDiv;
