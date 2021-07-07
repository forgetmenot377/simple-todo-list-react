import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const Todo = (props) => {
    const {text, completed, id, setComplete, deleteTodo} = props

    const handleToggle = () => {
        setComplete(id)
    }
    const handleDelete = () => {
        deleteTodo(id)
    }
    return (
        <React.Fragment>
            <div className="todo">
                <li className="todo-item">{text}</li>
                <button onClick={handleToggle} className={completed ? "fa-complete" : "fa-incomplete"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </button>
                <button onClick={handleDelete}>
                    <FontAwesomeIcon className="fa-delete" icon={faTrash}/>
                </button>
            </div>
        </React.Fragment>
    )
}
export default Todo