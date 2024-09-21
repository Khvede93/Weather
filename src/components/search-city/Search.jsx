import React from 'react';

export const Search = ({ search, setSearch, handleSearch }) => {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className='search'>
      <input
        type='text'
        name='search'
        className='search-city'
        placeholder='Enter City name ...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setSearch('')}
        onKeyDown={handleKeyDown}
      />
      <button className='search-button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
