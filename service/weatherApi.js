import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
// const BASE = 'https://api.openweathermap.org/data/2.5';
const BASE = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;

export const fetchWeatherData = async (city) => {
  const res = await axios.get(`${BASE + city}`);
  //   , {
  //   params: {
  //     q: city,
  //     // units: 'metric',
  //     appid: API_KEY,
  //   },
  // }
  return res.data;
};

export const fetchForecastData = async (city) => {
  const res = await axios.get(`${BASE}/forecast`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return res.data.list.filter((_, idx) => idx % 8 === 0).slice(0, 5);
};
