import React from 'react';
import styled from 'styled-components';

const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #6dd5fa, #2980b9);
  padding: 1.5rem;
  border-radius: 1rem;
  margin-top: 2rem;
  width: 20rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: center;
`;

const WeatherIcon = styled.img`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const WeatherDescription = styled.p`
  font-size: 1.5rem;
  text-transform: capitalize;
`;

const WeatherInfo = styled.div`
`;

const Temperature = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Humidity = styled.p`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  const weatherIconClass = `wi wi-owm-${weather[0].id}`;

  return (
    <WeatherCard>
      <WeatherIcon className={weatherIconClass} src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} />
      <h2>{name}</h2>
      <WeatherDescription>{weather[0].description}</WeatherDescription>
      <WeatherInfo>
        <Temperature>Temperature: {main.temp} °C</Temperature>
        <Humidity>Humidity: {main.humidity} %</Humidity>
      </WeatherInfo>
    </WeatherCard>
  );
};

export default WeatherDisplay;
