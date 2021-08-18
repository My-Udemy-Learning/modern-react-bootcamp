import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
// import {Paper, Typography, AppBar, Toolbar, Grid} from "@material-ui/core"


function TodoApp() {
    const initialTodos = [
        {id: 1, task: "Feed Cat", completed: false},
        {id: 2, task: "Buy Birthday Gift", conpleted: true},
        {id: 3, task: "Call Mom", completed: false}
    ];
    const [todos, setTodos] = useState(initialTodos); // 1st
    const addTodo = newTodoText => {
        setTodos([...todos, {id:4, task: newTodoText, completed: false}])
    }
    

    return (
        <>
        <h1>Todo with hooks</h1>
            <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} /> 
        </>
    )
}
export default TodoApp;



//1. Todo App
//2. TodoList
//3. TodoForm
// TodoItem

// id, task(content), completed true or false


////////////////////////////////////////////
/* <Paper
style={{
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "#fafafa"
}}
elevation={0}
>
    <AppBar color='primary' position='static' style={{ height: "64px"}}>
    <Toolbar>
        <Typography color='inherit'>Todos with hooks</Typography>
    </Toolbar>
    </AppBar>
    <TodoList todos={todos} />
</Paper> */