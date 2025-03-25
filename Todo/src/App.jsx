import './App.css'
import { TodoProvider, useTodo } from './context/todo'

function App() {
  useTodo
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1> TODO </h1>
    </TodoProvider>
  )
}

export default App
