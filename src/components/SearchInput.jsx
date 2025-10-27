import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function SearchInput() {
    const [input, setInput] = useState('');
    const { setCity } = useContext(WeatherContext);

    function handleSubmit(e) {
        e.preventDefault();
        setCity(input);
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-row gap-2 items-center justify-center mx-auto">
                <input className="rounded w-48 h-8 text-center text-black border-[1px] border-blue-500"
                    type="text" placeholder="Enter your city...."

                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button className="border-[1px] border-blue-500 rounded-full h-8 w-24 text-xs bg-blue-300">Search</button>
            </form>
        </div>
    )
}
export default SearchInput;