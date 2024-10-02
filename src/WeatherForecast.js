import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
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
