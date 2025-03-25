'use client'

import { useParams, useRouter } from "next/navigation";

export default function ProfileId() {

  const { id } = useParams()
  const router = useRouter()

  return (
    <>
      <h1> This is my Profile id : {id} page  page ....</h1>
      <div onClick={() => router.push('/profile')}> back to parent</div>
    </>
  );
}
