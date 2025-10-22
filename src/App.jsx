import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import SearchInput from "./components/SearchInput";
import ToggleBlock from "./components/ToggleBlock";
import WeatherCard from "./components/WeatherCard";

function App() {
  const { city, darkMode } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);

  const API_KEY = '36ceeabe65d6440eb2843925251710'

  async function FetchWeather() {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      const data = await response.json()
      setWeather(data)
      console.log("Display the Data", data);
    } catch (error) {
      console.log("Fetched Data Error", error);
    }
  }
  useEffect(() => {
    FetchWeather();
  }, [city])

  return (

    <div className={`flex gap-4 flex-col justify-center items-center 
    ${darkMode ? "bg-[#1C1C1C] text-white" : "bg-white text-black"} mx-auto min-h-screen`}>
      <div className="px-4 py-2 flex flex-col gap-4 border-[1px] border-gray-300 
      shadow-2xl shadow-blue-600 mx-auto rounded">
        <h1 className="text-3xl font-semibold bg-blue-300">🌦️ Weather Forecast 🌤️</h1>
        <SearchInput />
        <ToggleBlock />
        {weather ? <WeatherCard weather={weather} /> : <p> Page is still Loading.....</p>}
      </div>
    </div>
  )
}
export default App;
