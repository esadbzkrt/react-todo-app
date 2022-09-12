import React, {useEffect, useState} from 'react';
import AddTodo from "../../components/AddTodo/AddTodo";
import Todo from "../../components/Todo/Todo";
import axios from "axios";
import './TodoList.scss';

const url = 'https://6310e3fd19eb631f9d688ef6.mockapi.io';


function TodoList() {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        axios.get(url+'/todos').then((response) => {
            setTodos(response.data);
        })
    }, [todos]);
    

    return (
        <div>

            <AddTodo/>
            {todos.map((todo) => {
                <Todo key={todo.id} todo={todo}/>

            })}
            

        </div>
    );
}

export default TodoList;