import style from "../styles/stringsuggestions.module.scss";
import Suggestions from "./Suggestions";

export default function StringSuggestions({ suggestions, displayed = true }: { suggestions: string[]; displayed?: boolean; }) {
    return (
        <Suggestions displayed={displayed && suggestions.length > 0} padding="0">
            {suggestions.map((suggestion) =>
                <div key={suggestion} className={style.suggestion}>
                    <p>{suggestion}</p>
                </div>
            )}
        </Suggestions>


    );
}