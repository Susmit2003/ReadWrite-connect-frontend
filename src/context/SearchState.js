import { useState, createContext } from "react";
import React from "react";

export const SearchContext = createContext();

const SearchState = (props) => {
    const [state, setState] = useState("");

    const setText = (text) => {
        setState(text);
    }

    return (
        <SearchContext.Provider value={{state, setText}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;