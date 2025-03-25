'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Userdetails() {

  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  

  async function getuserdeatils(){
    try {
      setIsLoading(true)
      const data = await fetch(`https://dummyjson.com/users/${params.id}`) ;
      const user = await data.json();
      
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(()=>{
    getuserdeatils();
  }, [])

  
  return isLoading ? <div> loading.... </div> : <div> User datils are below
    <div> {user.firstName} {user.lastName}</div>
  </div>
}