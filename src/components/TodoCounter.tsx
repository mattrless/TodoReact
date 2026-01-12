export function TodoCounter({ completed, total }: { completed: number; total: number }) {
  return (
    <h1 className="text-4xl text-center m-0 p-12 font-normal">
      You completed <span className="font-bold">{completed}</span> out of{" "}
      <span className="font-bold">{total}</span> ToDos
    </h1>
  )
}
