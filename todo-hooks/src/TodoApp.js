import React, {useState} from 'react';
import {Paper, Typography, AppBar, Toolbar, Grid} from "@material-ui/core"
import TodoList from './TodoList';

function TodoApp() {
    const initialTodos = [
        {id: 1, task: "Feed Cat", completed: false},
        {id: 2, task: "Buy Birthday Gift", conpleted: true},
        {id: 3, task: "Call Mom", completed: false}
    ];
    const [todos, setTodos] = useState(initialTodos);

    return (
        <Paper
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
        </Paper>
    )

}
export default TodoApp;



//1. Todo App
//2. TodoList
// TodoForm
// TodoItem

// id, task(content), completed true or false