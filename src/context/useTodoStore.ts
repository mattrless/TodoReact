import { create } from "zustand";
import type { Todo } from "../types/Todo";

interface TodoState {
  todos: Todo[];
  searchValue: string;
  loading: boolean;
  error: boolean;
  modalVisibility: boolean;

  setSearchValue: (value: string) => void;
  loadTodos: () => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  changeModalVisibility: () => void;
  createTodo: (newTodoValue: string) => void;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  searchValue: "",
  loading: true,
  error: false,
  modalVisibility: false,

  setSearchValue: (value) => set({ searchValue: value }),


  loadTodos: () => {
    try {
      const localStorageItems = localStorage.getItem("TODOS_V1");
      let parsedTodos: Todo[];

      if (!localStorageItems) {
        parsedTodos = [];
        localStorage.setItem("TODOS_V1", JSON.stringify(parsedTodos));
      } else {
        parsedTodos = JSON.parse(localStorageItems);
      }

      set({ todos: parsedTodos, loading: false });
    } catch (e) {
      console.error(e);
      set({ loading: false, error: true });
    }
  },


  completeTodo: (id) => {
    const newTodos = get().todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    set({ todos: newTodos });
  },


  deleteTodo: (id) => {
    const newTodos = get().todos.filter((todo) => todo.id !== id);

    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    set({ todos: newTodos });
  },

  changeModalVisibility: () => set((state) => ({
    modalVisibility: !state.modalVisibility
  })),

  createTodo: (newTodoValue: string) => {
    const newTodos = [...get().todos];

    const lastId = newTodos.length > 0 ? newTodos[newTodos.length - 1].id : 0;

    newTodos.push({
      id: lastId + 1,
      text: newTodoValue,
      completed: false,
    });
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    set({ todos: newTodos });
  },
}));
