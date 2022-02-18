import { useReducer, useEffect } from "react";


function useLocalStorageReducer(key, defaultValue, reducer) {
  // make a piece of state, based off of value in local storage (or default)
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    }
    catch (e) {
      value = defaultValue
    }
    return value;
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, dispatch];
}

export { useLocalStorageReducer };