"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean)=>void
  deleteTodo: (id: string)=>void
};

export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex gap-3 items-center justify-between">
      <div className="flex gap-1">
      <input id={id} 
             type="checkbox" 
             className="cursor-pointer peer" 
             defaultChecked={complete}
             onChange={e => toggleTodo(id, e.target.checked)}/>
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      </div>
      <button onClick={()=>deleteTodo(id)} className="bg-red-800 border border-slate-300 text-slate-300 px-2 py-0.5 my-1 rounded hover:bg-red-500 focus-within:bg-red-700 outline-none" type="submit">Delete</button>
    </li>
  );
}
