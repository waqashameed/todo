import { useState } from 'react';

import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Read Book',
      isCompleted: false
    },
    {
      text: 'Practice React',
      isCompleted: false
    },
    {
      text: 'Running',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
    

  
  return (
    <div className="app">
      
      <div className="todo-list">
      <header>Khaplu's Todo List</header>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>


    </div>
  );
}

export default App;
