import React from "react";
import "./ButtonAccordion.css";

const ButtonAccordion = (props) => {
  return (
    <>
      <button
        className="options_btn"
        onClick={props.onClick}
      ><p>↑↓</p></button>
    </>
  );
}

export default ButtonAccordion;