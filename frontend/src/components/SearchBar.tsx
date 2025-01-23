import { useEffect, useState } from "react";
import style from "../styles/searchbar.module.scss";
import StopPoint from "../types/StopPoint";
import StopsLinesSuggestions from "./StopsLinesSuggestions";
import apiService from "../services/api/PozNodeApiService";

export default function SearchBar({ hint = "", debounce = 600 }: { hint?: string; debounce?: number; }) {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<{ stops: StopPoint[], lines: string[]; }>({ stops: [], lines: [] });
    const [displaySuggestions, setDisplaySuggestions] = useState(false);

    useEffect(() => {
        if (input == "") {
            setDisplaySuggestions(false);
        }
        else {
            const debounceTimeoutId = setTimeout(async () => { updateSuggestions(); }, debounce);
            setDisplaySuggestions(true);

            return () => clearTimeout(debounceTimeoutId);
        }
    }, [input]);

    async function updateSuggestions() {
        setSuggestions({
            lines: await apiService.getLines(input),
            stops: await apiService.getStops(input)
        });
    }

    return (
        <div className={`${style.root} ${displaySuggestions ? style.has_suggestions : ""}`}>
            <input type="text" name="input" id="input" placeholder={hint} onChange={e => setInput(e.target.value.trim())} onBlur={() => setDisplaySuggestions(false)} />
            <StopsLinesSuggestions lines={suggestions.lines} stops={suggestions.stops} displayed={displaySuggestions} />
        </div>
    );
}