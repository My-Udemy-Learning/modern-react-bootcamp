import React, {useState} from 'react';



//onChange 
// piece of state for the value so we can control the input
// resetting the input once I hit submit

function TodoForm({addTodo}){
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue("");
    }

    return (
        <>
        <form onSubmit={e => {
            e.preventDefault();
            addTodo(value);
            reset();
        }}>
       <input value={value} onChange={handleChange}></input>
       </form>
        </>
    )
}
export default TodoForm;