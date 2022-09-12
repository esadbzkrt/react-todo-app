import './Todo.scss';

import React from 'react';

    function todoUpdate() {

    }

    function todoDelete() {

    }


function Todo(todo) {

    return (
        <div className="todo" key={todo.id}>
            <h3>{todo.id}</h3>
            <p>{todo.todo}</p>
            <button className="todo-update" onClick={todoUpdate}>Update</button>
            <button className="todo-delete" onClick={todoDelete}>Delete</button>
        </div>
    );
}

export default Todo;