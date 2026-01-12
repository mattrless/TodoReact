import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { TodoSearch } from './components/TodoSearch'
import { CreateTodoButton } from './components/CreateTodoButton'

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn TypeScript', completed: true },
    { id: 3, text: 'Learn Vite', completed: false },
    { id: 4, text: 'Learn NestJS', completed: false },
  ]);

  const completedTodos = todos.filter( (item) => !!item.completed ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( todo => (
    todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  ));

  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex flex-col items-center w-full max-w-md px-4">

        <TodoCounter 
          completed={completedTodos}
          total={totalTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {searchedTodos.map((item) => (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>
    </div>
  );
}


export default App
