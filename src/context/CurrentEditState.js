import { useState, createContext } from "react";
import React from "react";


export const editContext = createContext();

const editState = (props) => {
    const [state, setState] = useState("");

    const setText = (text) => {
        setState(text);
    }

    return (
        <editContext.Provider value={{state, setText}}>
            {props.children}
        </editContext.Provider>
    )
}

export default editState;