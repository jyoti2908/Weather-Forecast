import { createContext, useState } from "react";
const WeatherContext = createContext();

function WeatherProvider({ children }) {
    const [unit, setUnit] = useState("metric");
    const [darkMode, setDarkMode] = useState(false);
    const [city, setCity] = useState('London');

    function ToggleUnit() {
        setUnit(prev => (prev === "metric" ? "imperial" : "metric"));
    }

    function ToggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    return (
        <WeatherContext.Provider value={{city, setCity, unit, darkMode, ToggleDarkMode, ToggleUnit}}>
            {children}
        </WeatherContext.Provider>
    )
}
export { WeatherContext, WeatherProvider };

