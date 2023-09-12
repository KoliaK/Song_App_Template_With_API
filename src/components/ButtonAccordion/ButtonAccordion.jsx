import React from "react";
import styled from "styled-components";

const ButtonAccordion = (props) => {
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

  return (
    <>
      <Button
        onClick={props.onClick}
      ><ButtonContent>↑↓</ButtonContent></Button>
    </>
  );
}

export default ButtonAccordion;