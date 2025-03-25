import Link from "next/link";

async function fetchUsers() {
  const data = await fetch('https://dummyjson.com/users');
  const users = await data.json();
  // console.log(users);
  return users.users;
}

export default async function FetchServer(){
const users = await fetchUsers();
// console.log(users);
return <div><div className="text-3xl"> this is data from server </div>
  <ul>
    {users && users.map(user => <li className="pt-5" key={user.id}> <Link href={`/fetchserver/${user.id}`} key={user.id}> {user.firstName } </Link> </li>)}
  </ul>
</div>
}