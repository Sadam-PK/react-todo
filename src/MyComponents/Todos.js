import React from "react";
import Todo from "./Todo";
export default function Todos(props) {

    return (
        <div className="container">
            {props.todos.map((e) => {
                return <Todo todo={e} />
            })}
        </div>
    )
}