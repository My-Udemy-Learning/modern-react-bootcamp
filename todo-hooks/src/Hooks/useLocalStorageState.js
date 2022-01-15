import { useState, useEffect } from "react";


function useLocalStorageState(key, defaultValue) {
  // make a piece of state, based off of value in local storage (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    }
    catch (e) {
      val = defaultValue
    }
    return val;
  })
  // use useEffect to update local storage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state]);
  return [state, setState];
}
export default useLocalStorageState;





// old local Storage code from TodoApp.js
// const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
// useEffect(() => {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }, [todos]); // only run this effect when todos changes