import React from "react";

export default function Todo(props) {

    return (
        <div>
            {props.todo.sno}
            {props.todo.title}
            {props.todo.desc}
            <button className="btn btn-sm btn-danger" >Delete</button>
        </div>
    )
}