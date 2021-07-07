import React from "react";
import Todo from "./todo";

const TodoList = (props) => {
    const {setComplete, clearCompleted, deleteTodo, filteredTodos} = props
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} completed={todo.completed} id={todo.id}
                          setComplete={setComplete} deleteTodo={deleteTodo}/>
                ))}
            </ul>
            <button className='delete-completed' onClick={clearCompleted}>Clear completed</button>
        </div>
    )
}
export default TodoList