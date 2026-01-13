import { useTodoStore } from '../context/useTodoStore'

export function TodoSearch() {
  const { searchValue, setSearchValue } = useTodoStore();

  return (
    <input
      placeholder="Search..."
      className="
        bg-[#F9FBFC]
        rounded-xs
        border-2 border-[#202329]
        mx-6
        h-16
        w-[calc(100%-62px)]
        text-[24px]
        text-center
        font-['Montserrat'] font-normal
        text-[#1E1E1F]
        shadow-[0px_5px_50px_rgba(32,35,41,0.25)]
        placeholder:text-[#A5A5A5]
        placeholder:font-['Montserrat']
        placeholder:font-normal
        focus:outline
        focus:outline-[#61DAFA]
      "
      value={searchValue}
      onChange={ (e) => {        
        setSearchValue(e.target.value);
      }}
    />
  );
}
