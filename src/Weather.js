import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search city.."
              className="form-control"
              autoFocus
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Antwerp</h1>
      <ul>
        <li>Tuesday 18:30</li>
        <li>Scattered clouds</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Scattered Clouds"
              className="float-left"
            />{" "}
            <span className="temperature">16</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 4%</li>
            <li>Humidity: 83%</li>
            <li>Wind: 3km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
