import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
  let latitude = 51;
  let longitude = 4;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">day</div>{" "}
          <div>
            {" "}
            <WeatherIcon code="01d" size={36} />
          </div>
          <div>
            <span className="WeatherForecast-max">max</span>
            <span className="WeatherForecast-min">min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
