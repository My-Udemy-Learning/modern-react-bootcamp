import React from "react";
import useTodoState from "./Hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Paper, Typography, AppBar, Toolbar, Grid } from "@material-ui/core"


function TodoApp() {
    const initialTodos = [{ id: 1, task: "Pet a monkey", completed: false }];
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
        initialTodos
    );
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
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
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