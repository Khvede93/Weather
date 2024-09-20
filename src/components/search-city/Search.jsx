import React from 'react';

export const Search = ({ search, setSearch }) => {
  return (
    <div className='search'>
      <input
        type='text'
        name='search'
        className='city-search'
        placeholder='Enter City name ...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
