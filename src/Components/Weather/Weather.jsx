import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Weather.css';

function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=8c10bddaa118788548e218e043ad6a63')
      .then((response) => response.json())
      .then((weatherData) => {
        setData(weatherData);
        console.log(weatherData);
      });
  }, []);

  const getWeatherCondition = () => {
    const weather = data?.weather[0]?.main;
    if (weather === 'Clouds') {
      return (
        <div className="cloudy">
          <h1>{weather}</h1>
        </div>
      );
    } else if (weather === 'Rain') {
      return (
        <div className="rainy">
          <h1>{weather}</h1>
        </div>
      );
    } else {
      return (
        <h1>{weather}</h1>
      );
    }
  };

  return (
    <div className="weather-container">
      <h1>Welcome to Weather App</h1>
      {data && getWeatherCondition()}
      <h2>Temperature: {data?.main?.temp}</h2>
    </div>
  );
}

export default Weather;
