import React from "react";
import styled from "styled-components";

const OptionsContainer = styled.div `
background-color: hsl(0, 0%, 87%);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 1rem;
`

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

const Accordion = (props) => {
  const { filteredBands, showOptions, handleSortingOptionChange } = props;

  return (
    <>
      <OptionsContainer>
        <p className="results_found">{filteredBands.length} resultados</p>
        <div className="accordion">
          
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
        </div>
      </OptionsContainer>
    </>
  );
}

export default Accordion;