import React from 'react';
import {TodoCounter} from "../TodoCounter/index.js"
import {TodoSearch} from "../TodoSearch"
import {TodoList} from "../TodoList"
import {TodoItem} from "../TodoItem"
import {CreateTodoItem} from "../CreateTodoItem"
import {TodoContext} from "../TodoContext"
import {LoadingTodo} from "../LoadingTodo"
import {EmptyTodos} from "../EmptyTodos"

function AppUI(){

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

        <TodoList>

            {error && <p>Hubo un error</p>}
            {(!loading && !searchedTodos.lenght) && <EmptyTodos/>}

            {loading && 
                new Array(4).fill().map((item, index)=>
                (
                    <LoadingTodo key={index} />
                ))
            }

            {searchedTodos.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        {!loading && <CreateTodoItem/>}
      </React.Fragment>);
}

export {AppUI};