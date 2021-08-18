import React from 'react';
import useInputState from './Hooks/useInputState';

function TodoForm({addTodo}){
    const [value, handleChange, reset] = useInputState("")
    return(
        <>
        <form onSubmit={e => {
            e.preventDefault();
            addTodo(value);
            reset();
        }}
        >
        <input value={value} onChange={handleChange}></input>
        </form>
        </>
    );
}
export default TodoForm;