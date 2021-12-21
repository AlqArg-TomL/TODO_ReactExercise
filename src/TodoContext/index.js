import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

     
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [state, setState] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!state.length >= 1){
    searchedTodos = todos;
  }
  else
  {
    searchedTodos = todos.filter(todo => {

      const todoText = todo.text.toLowerCase() 
      const searchText = state.toLowerCase() 

      return todoText.includes(searchText);
    })
  }

  

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
        completed:false,
        text,
    });
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            state,
            setState,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
        
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};