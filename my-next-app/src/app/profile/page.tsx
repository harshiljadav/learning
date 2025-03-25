'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {

  const router = useRouter();
  return (
    <>
    <h1 className="bg-green-900"> This is my Profile page ....</h1>

    <div>List of Profiles</div>
    <ul>
      <li><Link href="/profile/1">Profile 1</Link></li>
      <li><Link href="/profile/2">Profile 2</Link></li>
      <li><Link href="/profile/3">Profile 3</Link></li>
      <li><Link href="/profile/4">Profile 4</Link></li>
      <li><Link href={{
        'pathname': '/profile/1',
        'query': 'dfg',
      }}>Profile 5</Link></li>
    </ul>
    </>
  );
}
