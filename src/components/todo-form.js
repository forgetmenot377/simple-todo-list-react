import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const TodoForm = (props) => {
    const {inputText ,setInputText,addTask,setStatus} = props

    const inputTextHandler = (e)=> {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        addTask(inputText);
        setInputText("")
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className="form-group">
            <form>
                <input value ={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} type="submit" className="todo-button"><FontAwesomeIcon
                    icon={faPlus}
                    size={'xs'}
                    style={{ display: 'inline-block', verticalAlign: 'middle',  color:'orangered',background: "white"}}
                /></button>
                <div className="select">
                    <select onChange={statusHandler} name="todo" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
export default TodoForm