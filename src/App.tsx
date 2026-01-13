import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Todo } from './types/Todo'

// [
//   { id: 1, text: 'Learn React', completed: false },
//   { id: 2, text: 'Learn TypeScript', completed: true },
//   { id: 3, text: 'Learn Vite', completed: false },
//   { id: 4, text: 'Learn NestJS', completed: false },
// ]

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo: Todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo: Todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (id: number) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => (todo.id === id))

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => (todo.id === id));

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

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
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}

          {!loading && searchedTodos.length === 0 && <p>Add a ToDo</p>}

          {searchedTodos.map((item: Todo) => (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
              onComplete={() => completeTodo(item.id)}
              onDelete={() => deleteTodo(item.id)}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
