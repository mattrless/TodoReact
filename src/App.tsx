import { TodoCounter } from './components/TodoCounter'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { TodoSearch } from './components/TodoSearch'
import { CreateTodoButton } from './components/CreateTodoButton'

const defaultTodoList = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn TypeScript', completed: true },
  { id: 3, text: 'Learn Vite', completed: false },
]

function App() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex flex-col items-center w-full max-w-md px-4">
        <TodoCounter completed={2} total={5} />
        <TodoSearch />
        <TodoList>
          {defaultTodoList.map((item) => (
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
