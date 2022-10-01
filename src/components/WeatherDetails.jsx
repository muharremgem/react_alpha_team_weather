import React from "react";

const WeatherDetails = ({ title, data, unit }) => {
  return (
    <div>
      <p>
        {title}: {" "}
        <span>
          {data}
          {unit}
        </span>
      </p>
    </div>
  );
};

export default WeatherDetails;
