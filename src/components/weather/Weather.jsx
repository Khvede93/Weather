import React, { useEffect, useState } from 'react';
import { Search } from '../search-city';

export const Weather = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=d12cb77f7b328824c97d05f086f85298`
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      if (data) {
        setWeatherData(data);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }
  function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData('kutaisi');
  }, []);
  console.log(weatherData);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading Data !!! Please Wait</div>
      ) : (
        <div>
          <div className='city-name'>
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
