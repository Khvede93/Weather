import React from 'react';

export const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className='search'>
      <input
        type='text'
        name='search'
        className='search-city'
        placeholder='Enter City name ...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='search-button' onClick={handleSearch}>
        Search Weather
      </button>
    </div>
  );
};
