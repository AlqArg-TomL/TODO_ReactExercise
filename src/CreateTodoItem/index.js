import React, { useEffect, useRef } from "react"
import "./CreateTodoItem.css"
import "./TodoForm.css"
import { TodoContext } from "../TodoContext";

function CreateTodoItem(){

    const searchInput = useRef(null);

    function handleFocus(){
        searchInput.current.focus();
    }

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [todoFormHidden, setTodoFormHidden] = React.useState(true);
    const {addTodo} = React.useContext(TodoContext);


    const onSubmit = () => {
        setTodoFormHidden(!todoFormHidden);
        addTodo(newTodoValue);
        setNewTodoValue('');
        onCancel();
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onClick = (event) => {
        setTimeout(() => {
            handleFocus();
        }, 200)   
        setTodoFormHidden(!todoFormHidden);
    }
    const onCancel = (event) => {
        if(todoFormHidden === false){
            setTodoFormHidden(true);
            setNewTodoValue("");
        }
    }
    const onKeyDownForm = (event) => {
        if(event.key === "Enter" && !event.ctrlKey && !event.shiftKey){
            onSubmit();
        }
    }
    
    return( 
        <div className="masterDiv">
            <button 
            className={`CreateTodoItem ${!todoFormHidden && "CreateTodoItem--hidden"}`}
            onClick={onClick}
            >
                <p>+</p>
            </button>
        
            <form 
                onSubmit={onSubmit}
                className={`todoForm ${!todoFormHidden && "todoForm--active"}`}
                onKeyDown={onKeyDownForm}  
                onBlur={onCancel}
            >
                <textarea
            
                    className="todoForm__text"
                    placeholder="Escribe un TODO. 'Enter' para guardar"
                    value = {newTodoValue} 
                    onChange={onChange}        
                    ref={searchInput}            
                ></textarea>
            </form>
        </div>
    );
}

export {CreateTodoItem};