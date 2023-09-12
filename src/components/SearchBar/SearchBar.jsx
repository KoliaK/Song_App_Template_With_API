import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlassIcon from '../../assets/magnifying-glass-icon.png';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bands, setBands] = useState([]);
  const [sortingOption, setSortingOption] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    axios.get('https://dws-recruiting-bands.dwsbrazil.io/api/bands')
      .then((response) => {
        setBands(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortingOptionChange = (option) => {
    setSortingOption(option);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const sortBands = (bands) => {
    if (sortingOption === 'alphabetic') {
      return bands.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingOption === 'popularity') {
      return bands.sort((a, b) => b.numPlays - a.numPlays);
    } else {
      return bands;
    }
  };

  const filteredBands = sortBands(
    bands.filter((band) =>
      band.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <nav>
        <input
        type="text"
        placeholder=''
        value={searchTerm}
        onChange={handleInputChange}
        style={{backgroundImage: `url(${GlassIcon})`, backgroundSize: `0.9rem`, backgroundRepeat: `no-repeat`, backgroundPosition: `95%`}}
        />
        <h1 className='isobar'>isobar<span className='fm'>.fm</span></h1>
      </nav>
      <div>
        <div className="options-container">
          <p className="results-found">{filteredBands.length} resultados</p>
          <div className="accordion">
            <button
              className="options-btn"
              onClick={toggleOptions}
            ><p>↑↓</p></button>
            {showOptions && (
              <div className="options-popup">
                <p onClick={() => handleSortingOptionChange('alphabetic')}>
                  Ordem Alfabética
                </p>
                <p onClick={() => handleSortingOptionChange('popularity')}>
                  Popularidade
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        {filteredBands.map((band) => (
          <div className='band-container' key={band.id}>
            <img className='band-img' src={band.image} alt={band.name} />
            <div className='band-info'>
              <h3 className='band-name'>{band.name}</h3>
              <p className='band-plays'>{band.numPlays} Plays</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBar;