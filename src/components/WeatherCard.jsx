import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function WeatherCard({ weather }) {
    const { unit } = useContext(WeatherContext);

    const temp = unit === "metric" ? weather.current.temp_c : weather.current.temp_f;

    return (
        <div className="mx-auto flex flex-col justify-center items-center gap-2 border-[1px] border-white mx-auto px-4 py-4 mb-4">
            <h1 className="text-xl font-bold">
                {weather.location.name}, {weather.location.country}

            </h1>
            <img className="h-24 w-24"
                src={weather.current.condition.icon}
                alt="weather icon" />
            <p className="text-2xl">
                {temp}°{unit === "metric" ? "C" : "F"}
            </p>
            <h2>
                {weather.current.condition.text}
            </h2>
            <h3>
                Humidity: {weather.current.humidity} %
            </h3>

        </div>
    )
}
export default WeatherCard;