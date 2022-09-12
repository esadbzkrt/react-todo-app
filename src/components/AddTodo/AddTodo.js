import './AddTodo.scss';

import React, {useState} from 'react';
import axios from "axios";

const url = 'https://6310e3fd19eb631f9d688ef6.mockapi.io';

function AddTodo() {
    const [todo, setTodo] = useState('');


    const postTodo = async (e) => {
        e.preventDefault();
        await axios.post(url+'/todos', {todo: todo});
        console.log("todo eklendi");
        setTodo('');
    }

    return (
        <div className="todo">
            <input type="text" value={todo} placeholder="Add Todo" className="todo-text"
                   onChange={(e) => setTodo(e.target.value)}/>
            <button disabled={todo.length < 3} className="todo-update" onClick={postTodo}>Add Todo</button>
        </div>


    );
}

export default AddTodo;