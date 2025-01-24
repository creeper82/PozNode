import { useEffect, useState } from "react";
import style from "../styles/searchbar.module.scss";
import StopPoint from "../types/StopPoint";
import StopsLinesSuggestions from "./StopsLinesSuggestions";
import apiService from "../services/api/selectedService";

export default function SearchBar({ hint = "Find a stop or line", debounce = 600 }: { hint?: string; debounce?: number; }) {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<{ stops: StopPoint[], lines: string[]; }>({ stops: [], lines: [] });
    const [displaySuggestions, setDisplaySuggestions] = useState(false);

    useEffect(() => {
        if (input == "") {
            hideAndClear();
        }
        else {
            const debounceTimeoutId = setTimeout(async () => { updateSuggestions(); }, debounce);
            setDisplaySuggestions(true);

            return () => clearTimeout(debounceTimeoutId);
        }
    }, [input]);

    function hideAndClear() {
        setDisplaySuggestions(false);
        setSuggestions({ lines: [], stops: [] });
    }

    async function updateSuggestions() {
        setSuggestions({
            lines: await apiService.getLines(input),
            stops: await apiService.getStops(input)
        });
    }

    return (
        <div className={`${style.root} ${displaySuggestions && (suggestions.lines.length > 0 || suggestions.stops.length > 0) ? style.has_suggestions : ""}`}>
            <input type="text" name="input" id="input" placeholder={hint} onChange={e => setInput(e.target.value.trim())} onBlur={hideAndClear} />
            <StopsLinesSuggestions lines={suggestions.lines} stops={suggestions.stops} displayed={displaySuggestions} />
        </div>
    );
}