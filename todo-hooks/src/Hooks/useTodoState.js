/* eslint-disable import/no-anonymous-default-export */
import useLocalStorageState from "./useLocalStorageState";

export default initialTodos => {

  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return {
    todos,

  };
};
