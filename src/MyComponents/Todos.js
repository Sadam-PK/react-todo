import React from "react";
import Todo from "./Todo";
export default function Todos(props) {

    return (
        <div className="container">
            <h3 className="text-center">Todos List</h3>

            {props.todos.length === 0 ? 'no todos to display' :
                props.todos.map((e) => {
                    return <Todo todo={e} key={e.sno} onDelete={props.onDelete} />
                })}
        </div>
    )
}