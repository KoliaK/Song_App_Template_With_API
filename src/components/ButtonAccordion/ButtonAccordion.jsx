import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 33%);
  color: hsl(0, 0%, 100%);
  width: 3rem;
  height: 100%;
  border: none;
  font-size: 1.9rem;
  cursor: pointer;
  `
const ButtonContent = styled.p `
padding: 0.2rem;
margin-bottom: 0.5rem;
`

const ButtonAccordion = (props) => {
  const { showOptions, handleSortingOptionChange } = props;

  return (
    <>
      <Button
        onClick={props.onClick}
      ><ButtonContent>↑↓</ButtonContent></Button>
      {showOptions && (
        <div className="options_popup">
          <p onClick={() => handleSortingOptionChange('alphabetic')}>
            Ordem Alfabética
          </p>
          <p onClick={() => handleSortingOptionChange('popularity')}>
            Popularidade
          </p>
        </div>
      )}
    </>
  );
}

export default ButtonAccordion;