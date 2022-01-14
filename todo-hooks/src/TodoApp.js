import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import { Paper, Typography, AppBar, Toolbar, Grid } from "@material-ui/core"


function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Feed Cat", completed: false },
        { id: 2, task: "Buy Birthday Gift", completed: true },
        { id: 3, task: "Call Mom", completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos); // 1st
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
    }
    const removeTodo = todoId => {
        // filter out removed todo
        // updateTodo will edit actual text
        const updateTodos = todos.filter(todo => todo.id !== todoId);
        // call setTodos with the new todos array
        setTodos(updateTodos);
    }
    const toggleTodo = todoId => {
        const updateTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updateTodos);
    };
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

            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">Todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                </Grid>
            </Grid>
        </Paper>
    );
}
export default TodoApp;



//1. Todo App
//2. TodoList
//3. TodoForm
//4. TodoItem