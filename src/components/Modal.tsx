import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode}) {
  const modal = document.getElementById('modal');
  if (!modal) return null;

  return createPortal(
    <div className='bg-slate-900/80 flex justify-center items-center text-white fixed inset-0'>
      { children }
    </div>,
    modal
  );
}