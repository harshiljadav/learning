// 'use client'


import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Home() {

  // const router = useRouter();
  return (
    <div className="flex flex-col justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      This routing is using link
      <Link href="/receipies"> Receipies </Link>
      <Link href="product/25?search=hello&asc=true"> Product Page</Link>
      <Link href="fetchserver"> fetch data usinf server component Page</Link>
      <Link href="fetchclient"> fetch data using client component Page</Link>
      <Link href="member?search=hello"> Member Page</Link>
      Hello this is home page...

      {/* <button onClick={() => router.push('product')}> Product pge using router </button>
      <button onClick={() => router.push('member')}> member pge using router </button> */}
    </div>
  );
}
