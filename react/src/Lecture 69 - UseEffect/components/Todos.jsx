import {useState} from 'react'
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

function Todos() {
      const [todos, setTodos] = useState([]);
  return (
     <>
      <h2>Todo App</h2>
      <AddTodo todos={todos} setTodos={setTodos} />
      <DisplayTodo todos={todos} />
    </>
  )
}

export default Todos