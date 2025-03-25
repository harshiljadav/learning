


async function fetchUserdata(id) {
  try{
    const data = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await data.json();
    return user
  }
  catch( error ) {
    throw new Error(error);
  }
}

export default async function UserDetails({params}){

  const userdata = await fetchUserdata(params.id);
  return <div> User datils are below
    <div> {userdata.firstName} {userdata.lastName}</div>
  </div>
}