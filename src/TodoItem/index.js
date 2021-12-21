import React from "react"
import "./TodoItem.css"

function TodoItem(props){
    return( 
        <li className={`TodoItem ${props.completed && "TodoItem--active"}`}>
            <div 
            className={`Icon Icon--Check ${props.completed && "Icon--Check--active"}`}
            onClick={props.onComplete}
            ></div>

            <p 
            className={`${props.completed && "TodoItem--completed"}`}
            >{props.text}</p>
            
            <span 
            className="Icon Icon--Cancel"
            onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export {TodoItem};