import './AddTodo.scss';

import React,{useState} from 'react';

function AddTodo() {
    const [input, setInput] = useState('');

    const formData = new FormData();
    formData.append('todo', input);


    function postTodo(data) {
        fetch('https://6310e3fd19eb631f9d688ef6.mockapi.io/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(r => r.json()).then(data => {
            console.log(data);
        }
        )
    }

    return (
        <div className="todo">
            <h3 className="todo-id">Todo Id</h3>
            <h3 className="todo-id">User</h3>
            <input type="text" value={input} placeholder="Add Todo" className="todo-text" onChange={(e)=>setInput(e.target.value)}/>
            <button className="todo-update" onClick={postTodo}>Add Todo</button>

        </div>
    );
}

export default AddTodo;