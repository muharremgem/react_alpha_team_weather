import React from "react";

const WeatherDetails = ({ title, data, unit }) => {
  return (
    <div>
      <p className="text-sm">
        {title}: {" "}
        <span className="font-semibold">
          {data}
          {unit}
        </span>
      </p>
    </div>
  );
};

export default WeatherDetails;
