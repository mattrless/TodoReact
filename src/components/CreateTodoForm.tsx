import { useState } from "react";
import { useTodoStore } from "../context/useTodoStore";

export function CreateTodoForm() {
  const { changeModalVisibility, createTodo } = useTodoStore();
  const [ newTodoValue, setNewTodoValue ] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(newTodoValue)
    changeModalVisibility();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full max-w-md rounded-xl p-6 shadow-2xl flex flex-col gap-4"
    >
      <label
        className="text-lg font-semibold text-gray-800 text-center"
      >
        Write your Todo
      </label>

      <textarea
        value={newTodoValue}
        placeholder="My todo..."
        onChange={(e) => {
          setNewTodoValue(e.target.value);
        }}
        className="w-full min-h-30 p-3 border border-gray-300 rounded-lg text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
      />

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition "
          onClick={changeModalVisibility}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"          
        >
          Add
        </button>
      </div>
    </form>
  );
}
