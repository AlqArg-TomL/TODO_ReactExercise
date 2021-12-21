import './App.css';
import React from "react";
import {AppUI} from "./AppUI"
import {TodoProvider} from "../TodoContext"

// const defaultTodos = [
//   { text: "Ver Spiderman No Way Home", completed:true},
//   { text: "Hacer disfraz de spiderman", completed:false},
//   { text: "Anotarme en escuela de Muay Thai", completed:false}
// ];



function App() {
 
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
