import { useTodoStore } from '../context/useTodoStore';

export function CreateTodoButton() {
  const { changeModalVisibility, modalVisibility } = useTodoStore();
  return (
    <button
    className={`bg-amber-500 shadow-2xs rounded-4xl border-0 cursor-pointer text-6xl fixed bottom-6 right-6 font-bold text-white flex justify-center items-center h-16 w-16 rotate-0 transition duration-300 ease-in-out hover:rotate-224
      ${modalVisibility ? 'z-1' : ''}
    `}
    onClick={ changeModalVisibility }
    >
      +
    </button>
  )
}