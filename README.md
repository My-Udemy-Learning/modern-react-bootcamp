# Modern React Bootcamp Udemy Course

## Table of Contents

1. [Basic React](basic-react)

   a. [First Component](basic-react/firstComponent)

   b. [Hello Props](basic-react/HelloProps)

   c. [JSX Demo](basic-react/JSXDemo)

   d. [JSX Loops](basic-react/JSXLoops)

   e. [Number Picker](basic-react/NumberPicker)

   f. [Slot Machine](basic-react/SlotMachine)

2. [Create React Practice](create-react-practice)
3. [Box Maker](box-maker)
4. [Classes Vs Hooks](classes-vs-hooks)
5. [hooks/custom-hooks](hooks/custom-hooks)
6. [Pokedex](pokedex)
7. [Hooks Practice](hooks-practice)
8. [Todo Hooks with Local Storage](todo-hooks)
9. [Context Demo App](context-demo-app)
10. [Todos Context useReducer](todos-context-usereducer)


**useReducer Notes**

- (accumulatedValue, nextItem) => nextAccumulatedValue
- takes two values and "reduces" them down to one value

**In TodoApp**
- The two values provided to a reducer are:
   - The current state
   - An action that (may) update the state
   - (state, action) => newState
   - Current todos state and an action (add new todo, remove a todo, toggle a todo)
   - Then return new version of todos or updated version of the state that will be used next time that reducer is called

   