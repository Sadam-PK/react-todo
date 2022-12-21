import React from "react";
import Todo from "./Todo";
export default function Todos(props) {
    return (
        <div className="container">
            <h3>Todos List</h3>
            {props.todos.map((todo) => {
                return (
                    <>
                        <Todo todo={todo} />
                    </>

                )
            })}

        </div>
    )
}