import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp(){
    const initialTodos = [
        {id: 1, task: "Feed cat", complete: true},
        {id: 2, task: "Review Code", complete: false},
        {id: 3, task: "Call mom", complete:  false}
    ]


const [todos, setTodos] = useState(initialTodos); //setTodos = addState
const addTodo = newTodoText => {
    setTodos([...todos, {id:4, task: newTodoText, complete: false}])
}
    return (
<>
    <h1>This is my todo app!</h1>
    <TodoForm addTodo={addTodo} />
    <TodoList todos={todos}/>
    </>
    )
}
export default TodoApp;