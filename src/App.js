import React, {useEffect, useState} from "react";
import TodoList from "./components/todo-list";
import './App.css';
import TodoForm from "./components/todo-form";

function App() {
    const [inputText, setInputText] = useState("")
    const [todos,setTodos] = useState([])
    const [status,setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

// useEffect run this func (callback) every time when todos state changes
    useEffect(()=> {
       filterHandler()
    },[todos,status])

    const filterHandler = () => {
        switch (status) {
            case 'Completed':
                setFilteredTodos(todos.filter(todo=> todo.completed))
                break;
            case 'Uncompleted':
                setFilteredTodos(todos.filter(todo=> !todo.completed))
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    }

    const addTask = (inputText) => {
         setTodos([...todos,
             {text: inputText, completed: false, id: Math.random()}]);
    }
    const setComplete = (id) => {
        let mapped = todos.map(todo => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo};
        });
        setTodos(mapped);
    }
    const clearCompleted = () => {
        let filtered = todos.filter(todo => {
            return !todo.completed;
        });
        setTodos(filtered);
    }
    const deleteTodo = (id) => {
        let removed = todos.filter(todo => {
            return todo.id !== id
        })
        setTodos(removed)
    }

  return (
      <div className="app">
          <h1>Todo app</h1>
          <header>
              <TodoForm
                  addTask={addTask}
                  todos={todos}
                  setTodos={setTodos}
                  inputText={inputText}
                  setInputText={setInputText}
                  setStatus={setStatus}
              />
          </header>
          <TodoList todos={todos}  setComplete={setComplete} clearCompleted={clearCompleted} deleteTodo={deleteTodo} filteredTodos={filteredTodos}/>
      </div>
  );
}
export default App;
