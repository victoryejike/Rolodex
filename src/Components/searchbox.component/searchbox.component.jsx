import React from 'react';
import './searchbox.styles.css'

const SearchBox = ({ handleChange, placeholder }) => {
    return(
        <input className='searchBox' 
            type='search' 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    )
}

export default SearchBox