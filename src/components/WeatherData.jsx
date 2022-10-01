import React from "react";

const WeatherData = ({ WeatherData }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
