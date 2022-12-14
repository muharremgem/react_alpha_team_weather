import { Navbar, Input, WeatherData } from "./components/index";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("Ankara");
  const [data, setData] = useState(null);

  const WEATHER_API = process.env.REACT_APP_WEATHER_API;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${WEATHER_API}`;

  const getInfo = () => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((ERR) => console.error(ERR));
  };

  return (
    <div className="bg-blue-600 mx-screen mx-auto flex flex-col h-full pt-[1rem] pb-[2rem] px-32">
      <Navbar />
      <Input getLocation={setLocation} getInfos={getInfo} />
      {data && <WeatherData WeatherData={data}/>}
    </div>
  );
}

export default App;
