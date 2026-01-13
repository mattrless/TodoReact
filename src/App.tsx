import { useEffect } from "react";
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { useTodoStore } from "./context/useTodoStore";
import { Modal } from "./components/Modal";
import { CreateTodoForm } from "./components/CreateTodoForm";

function App() {
  const { todos, searchValue, loading, error, loadTodos, modalVisibility } = useTodoStore();

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex flex-col items-center w-full max-w-md px-4">

        <TodoCounter completed={completedTodos} total={totalTodos} />

        <TodoSearch />

        <TodoList>
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          {!loading && searchedTodos.length === 0 && <p>Add a ToDo</p>}

          {searchedTodos.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />

        { modalVisibility && (
          <Modal>
            <CreateTodoForm />
          </Modal>
          )
        }
      </div>
    </div>
  );
}

export default App;
