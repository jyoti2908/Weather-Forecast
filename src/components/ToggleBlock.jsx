import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function ToggleBlock() {
    const { unit, ToggleDarkMode, darkMode, ToggleUnit } = useContext(WeatherContext);
    return (
        <div>
            <div className="flex flex-row items-center justify-center gap-2">
                <button className="border-[1px] rounded-full h-8 w-32 text-xs bg-pink-400 text-white"
                    onClick={ToggleUnit}>
                    {unit === "metric" ? "Switch to °F" : "Switch to °C"}
                </button>
                <button className="border-[1px] rounded-full h-8 w-32 text-xs bg-pink-400 text-white"
                    onClick={ToggleDarkMode}>
                    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
        </div>
    )
}
export default ToggleBlock;