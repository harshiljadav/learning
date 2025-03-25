import { NextResponse } from "next/server";
import TodoList from "../components/TodoList"
import { Suspense } from "react";

async function GetTodo () {
  try{
    return await fetch('https://dummyjson.com/todos')
    .then((res) =>  {
      return res.json()}
    )
  } catch (error) {
    return NextResponse.json({
      success : false,
      message : 'Something went wrong please try again later',
    })
  }
}

async function Todos() {
 const todos = await GetTodo();
//  console.log(todos);
  return (
    <div className="flex w-full h-screen flex-col">
      <div className="pt-4 text-2xl self-center  ">Todos</div>
      <div className="pt-4 text-2xl flex-row">
        <Suspense>
          <TodoList />
        </Suspense>
      </div>
    </div>
  )
}

export default Todos