"use client";
import React, { useState } from "react";
import Head from "next/head";
import SearchBox from "../components/SearchBox";
import WeatherCard from "../components/WeatherCard";
// import ForecastCard from "../components/ForecastCard";
import { fetchWeatherData } from "../service/weatherApi";
import "../styles/Home.css";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      // console.log(data);

      // const forecastData = await fetchForecastData(city);
      setWeather(data);
      // setForecast(forecastData);
      setError("");
    } catch (err) {
      setError(
        err?.response?.data?.message || err?.message || "something went wrong."
      );
      setWeather(null);
      setForecast([]);
    }
  };

  return (
    <>
      <Head>
        <title>Next Weather App</title>
      </Head>
      <main className="home">
        <h1>Weather App</h1>
        <SearchBox onSearch={handleSearch} />
        {error && <p className="error">{error}</p>}
        {!!weather?.location && <WeatherCard weather={weather} />}
        {/* {forecast.length > 0 && (
          <div className="forecast-container">
            {forecast.map((day, index) => (
              <ForecastCard key={index} day={day} />
            ))}
          </div>
        )} */}
      </main>
    </>
  );
}
