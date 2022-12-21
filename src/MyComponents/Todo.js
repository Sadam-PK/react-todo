import React from "react";

export default function Todo({todo}){
    return(
        <div>
           {todo.title}
           <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}