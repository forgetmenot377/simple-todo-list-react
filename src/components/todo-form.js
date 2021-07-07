import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useForm} from "react-hook-form";

const TodoForm = (props) => {
    const {register, handleSubmit, errors} = useForm({
        mode: "onChange"
    });
    let options = ['All', 'Completed', 'Uncompleted']
    const {inputText, setInputText, addTask, setStatus} = props
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e, data) => {
        e.preventDefault()
        addTask(inputText);
        setInputText("")
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    const onSubmit = (data) => console.log(data)
    return (
        <div className="form-group">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="todo" type="text" className="todo-input" {...register("todo", {
                    minLength: 5,
                    pattern: /^[A-Za-z]+$/i,
                    required: "Text is required",
                    message: "Please enter just letters"
                })}
                       value={inputText} onChange={inputTextHandler}/>
                {
                    errors?.todo && <p message={errors.todo.message}></p>
                }
                <button disabled={inputText.length < 1} onClick={submitTodoHandler} type="submit"
                        className="todo-button">
                    <FontAwesomeIcon icon={faPlus} size={'xs'}/>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todo" className="filter-todo">
                        {options.map((el) => (
                            <option key={el}>{el}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}
export default TodoForm