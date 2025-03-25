import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos : [
    {
      id : Date.now(),
      name : 'todo1',
      Comleted : false
    }
  ],
  creteTodo : ()=>{},
  deleteTodo : ()=>{},
})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider