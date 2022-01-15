/* eslint-disable import/no-anonymous-default-export */
import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default initialTodos => {

  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      // filter out removed todo
      // updateTodo will edit actual text
      const updateTodos = todos.filter(todo => todo.id !== todoId);
      // call setTodos with the new todos array
      setTodos(updateTodos);
    },
    toggleTodo: todoId => {
      const updateTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updateTodos);
    },
    editTodo: (todoId, newTask) => {
      const updateTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updateTodos);
    }
  };
};
