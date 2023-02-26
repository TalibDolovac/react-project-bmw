import React from "react";

const CustomButton = (props) => {
  return <button style={props.style}>{props.children}</button>;
};

export default CustomButton;
