import {
  Card,
  CardContent,
  CardDescription
} from "@/components/ui/card"

async function fetchReceipies() {
  try {
    const response = await fetch('https://dummyjson.com/recipes')
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    throw new Error (error)
  }
}

export default async function ReceipiesList(){

  const recepies = await fetchReceipies();

  return (<div>
    <div className="text-3xl m-4">Receipies</div>
    <div className="flex flex-wrap mt-5 gap-4 justify-evenly align-middle">
      
      {recepies && recepies.map((receipy) => {return <div className="w-1/4" key={receipy.id}> <Card className="">
        <CardDescription>{receipy.name} </CardDescription>
      </Card> </div>})}
     
    </div>
  </div>)
}