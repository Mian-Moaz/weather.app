import React from 'react';
import '../styles/WeatherCard.css';

export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather?.location?.name}, {weather?.sys?.country}</h2>
      <h1>{Math.round(weather?.current?.temp_c)}°C</h1>
      <p>{weather?.weather?.[0]?.description}</p>
      <img
        src={ weather?.current?.condition?.icon || `image.png`}
        alt="icon"
      />
      <div className="weather-details">
        <p>Humidity: {weather?.current?.humidity}%</p>
        <p>Wind: {weather?.current?.wind_kph} kph</p>
      </div>
    </div>
  );
}
