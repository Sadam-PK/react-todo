import React from "react";

export default function AddTodo() {
    return (
        <>
            <div className="container my-3">
                <form>
                    <div className="mb-3">
                        <label for="title" className="form-label">Todo Title</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label for="desc" className="form-label">Todo Description</label>
                        <textarea type="text" className="form-control" id="desc" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}