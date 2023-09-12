import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
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
        <SearchBar value={searchTerm} onChange={handleInputChange} />
        <div className="options_container">
          <p className="results_found">{filteredBands.length} resultados</p>
          <div className="accordion">
            <button
              className="options_btn"
              onClick={toggleOptions}
            ><p>↑↓</p></button>
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
        </div>
      </nav>

      <div className="results_container">
        {filteredBands.map((band) => (
          <div className='band_container' key={band.id}>
            <img className='band_img' src={band.image} alt={band.name} />
            <div className='band_info'>
              <h3 className='band_name'>{band.name}</h3>
              <p className='band_plays'>{band.numPlays} Plays</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;