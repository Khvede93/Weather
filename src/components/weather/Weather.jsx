import React, { useEffect, useState } from 'react';
import { Search } from '../search-city';

export const Weather = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

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
          <div className='date'>
            <span>{getCurrentDate()}</span>
          </div>
          <div>{weatherData?.main?.temp}</div>
          <p className='description'>{weatherData?.weather[0]?.description}</p>
          <div className='weather-info'>
            <div>
              <div>
                <p className='wind'>Wind Speed: {weatherData?.wind?.speed}</p>
              </div>
            </div>
            <div>
              <div>
                <p className='humidity'>
                  Humidity: {weatherData?.main?.humidity}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
