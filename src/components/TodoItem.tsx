import { CheckIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useTodoStore } from '../context/useTodoStore'
interface Props {
  id: number;
  text: string;
  completed: boolean;
}

export function TodoItem({ id, text, completed }: Props) {

  const { completeTodo, deleteTodo } = useTodoStore();

  return (
    <li className="bg-[#FAFAFA] relative flex justify-center items-center mt-6 shadow-[0px_5px_50px_rgba(32,35,41,0.15)]">
      
      <CheckIcon
        className={`cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold absolute left-3 
        ${completed ? 'text-[#4caf50]' : ''}`}
        onClick={() => completeTodo(id)}
      />

      <p
        className={`my-6 ml-6 w-[calc(100%-120px)] text-[18px] leading-6 font-normal 
        ${completed ? 'line-through' : ''}`}
      >
        {text}
      </p>

      <XMarkIcon
        className="cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold absolute -top-6 right-0 hover:text-red-500"
        onClick={() => deleteTodo(id)}
      />
    </li>
  );
}
