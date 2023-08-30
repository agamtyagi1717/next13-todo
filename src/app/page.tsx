import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

function getTodos(){
  return prisma.todo.findMany()
}

async function deleteTodo(id: string){
  "use server"

  await prisma.todo.delete({where: {id}})

  redirect('/');
}

async function toggleTodo(id: string, complete: boolean){
  "use server"

  await prisma.todo.update({where: {id}, data:{complete}})
}


export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between mb-10 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link className="bg-yellow-400 border border-slate-300 text-zinc-900 px-2 py-1 rounded hover:bg-yellow-200 focus-within:bg-yellow-700 outline-none" href='/new'>
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo=> (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </>
  )
}