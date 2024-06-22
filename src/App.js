import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import styled from 'styled-components';
import Loading from './components/Loading';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  color: #202124;
  margin-bottom: 1.25rem;
`;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'e05d78fabe31a177b55429d19d9717ef';

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      setWeatherData(null);
      setError('Failed to fetch weather data. Please try again.');
    }
    setLoading(false);
  };

  return (
    <AppContainer>
      <Title>Weather Dashboard</Title>
      <Search onSearch={fetchWeather} />
      {loading && <Loading/>}
      {error && <p>{error}</p>}
      {!loading && <WeatherDisplay weatherData={weatherData} />}
    </AppContainer>
  );
};

export default App;
