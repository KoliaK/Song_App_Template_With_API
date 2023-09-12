import React, { useState } from "react";
import GlassIcon from '../../assets/magnifying-glass-icon.png';
import './SearchBar.css';

const SearchBar = (props) => {
  
  return (
    <>
      <div className="search_top_container">
        <input
        type="text"
        placeholder=''
        value={props.value}
        onChange={props.onChange}
        style={{backgroundImage: `url(${GlassIcon})`, backgroundSize: `0.9rem`, backgroundRepeat: `no-repeat`, backgroundPosition: `95%`}}
        />
        <h1 className='isobar'>isobar<span className='fm'>.fm</span></h1>
      </div>

      <div className="search_bottom_container">
        
      </div>
    </>
  );
}

export default SearchBar;