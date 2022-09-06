import './App.css';
import Header from "./components/Header/Header";
import TodoList from "./pages/TodoList/TodoList";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<TodoList/>}/>
                    <Route path="/updateTodo/:id"/>
                    <Route path="/Todos/:id"/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
