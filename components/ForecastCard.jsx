import React from 'react';
import { formatDate } from '../utils/helpers';
import '../styles/ForecastCard.css';

export default function ForecastCard({ day }) {
  return (
    <div className="forecast-card">
      <p>{formatDate(day.dt)}</p>
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt="icon"
      />
      <p>{Math.round(day.main.temp)}°C</p>
      <p>{day.weather[0].main}</p>
    </div>
  );
}
