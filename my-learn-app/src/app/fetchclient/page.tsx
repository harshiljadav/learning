'use client'

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function FetchClient() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState();

  async function fetchUser() {
    try {
      setIsLoading(true);
      const data = await fetch('https://dummyjson.com/users');
      const user = await data.json();
      
      if (user?.users) {
          setdata(user?.users);
          setIsLoading(false);
        }

    }catch(error) {
      throw new Error(error);
    } 
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return isLoading ? <div> loading.... </div> : <div><div className="text-3xl"> this is data from client </div>
    <ul>
      {data && data.map(user => <li key={user.id}><Link className="cursor-pointer" href={`/fetchclient/${user.id}`}>{user.firstName}</Link></li>)}
    </ul>
  </div>
}