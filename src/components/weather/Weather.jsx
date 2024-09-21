import React, { useState } from 'react';
import { Search } from '../search-city';

export const Weather = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=d12cb77f7b328824c97d05f086f85298`
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      console.log(data);
    } catch (e) {}
  }
  function handleSearch() {
    fetchWeatherData(search);
  }
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div>Weather</div>
    </div>
  );
};
