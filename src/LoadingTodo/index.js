import React from "react"
import "./TodosLoading.css"

function LoadingTodo(){
    return(
        <li className="TodoItem-loading">
            <div className="LoaderBalls">
                <span className="LoaderBalls__item"></span>
                <span className="LoaderBalls__item"></span>
                <span className="LoaderBalls__item"></span>
            </div>
        </li>
    )
}

export {LoadingTodo}