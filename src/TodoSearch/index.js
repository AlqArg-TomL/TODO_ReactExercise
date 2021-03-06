import React from "react"
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"

function TodoSearch(){

    const {state, setState} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setState(event.target.value);
    };

    return[
        <input 
        className="TodoSearch" 
        placeholder="Escribe un TODO"
        onChange={onSearchValueChange}
        value={state}
        />,
    ];
}

export {TodoSearch};