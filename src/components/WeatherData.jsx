import React from "react";
import { WeatherDetails } from "./index";

const WeatherData = ({ WeatherData }) => {
  const iconUrlCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex">
          <p className="font-semibold ">
            <span className="text-2xl">{WeatherData.name}</span>,{"   "}
            <span className="text-xl">{WeatherData.sys.country}</span>
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col items-center">
            <p className="text-xl">{WeatherData.weather[0].main}</p>
            <img
              src={iconUrlCode(WeatherData.weather[0].icon)}
              alt="weather_icon"
              className="h-[5rem]"
            />
            <p>{(((WeatherData.main.temp - 32) * 5) / 9).toFixed(0)}°</p>
            <div className="flex flex-col items-center mt-2 gap[.2rem]">
              {/* */}
              <WeatherDetails
                title="Real Fell"
                data={(((WeatherData.main.temp - 32) * 5) / 9).toFixed(0)}
                unit="°"
              />
              <WeatherDetails
                title="Humidity"
                data={WeatherData.main.humidity}
                unit="%"
              />
              <WeatherDetails
                title="Wind"
                data={WeatherData.wind.speed}
                unit=" km/h"
              />
              {/* */}
            </div>
            <div>
            <WeatherDetails
                title="Wind"
                data={WeatherData.wind.speed}
                unit=" km/h"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
