import React, { useState } from "react";
import styled from "styled-components";
import GlassIcon from '../../assets/magnifying-glass-icon.png';

const Search = styled.div `
background-color: hsla(17, 80%, 51%, 0.842);
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem;
`

const Input = styled.input`
background-image: url(${GlassIcon}); 
background-size: 0.9rem; 
background-repeat: no-repeat; 
background-position: 95%;
outline: none;
border: none;
border-radius: 3px;
height: 2rem;
width: 60%;
padding-left: 1rem;
`

const Isobar = styled.h1`
font-size: 2rem;
color: hsl(0, 0%, 100%);
`

const Fm = styled.span`
color: hsl(0, 0%, 100%);
font-weight: 300;
font-size: 1rem;
`
const SearchBar = (props) => {
  return (
    <>
      <Search>
        <Input
        type="text"
        placeholder=''
        value={props.value}
        onChange={props.onChange} />
        <Isobar>isobar<Fm>.fm</Fm></Isobar>
      </Search>
    </>
  );
}

export default SearchBar;