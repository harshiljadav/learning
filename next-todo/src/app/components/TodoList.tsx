import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NextResponse } from "next/server"

async function GetTodos () {;
  try{
    return await fetch('https://dummyjson.com/todos', { cache: 'no-store' })
      .then((res) =>  {
        return res.json()
      }
    )
  } catch (error) {
    return NextResponse.json({
      success : false,
      message : 'Something went wrong please try again later',
    })
  }
}

async function TodoList() {
  // console.log(todos);
  const as = await GetTodos();

  const data = as?.todos?.map(todo => <div className="w-1/3" key={todo.id}>
      <Card className="m-4" >
      <CardHeader>
        <CardTitle> {todo.todo}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between">
        {todo.completed? 'yes' : 'no'}
      </CardFooter>
    </Card>
  </div>
  )
  return (
    <div className="flex flex-wrap">
     {data}
    </div>
  )
}

export default TodoList