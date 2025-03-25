'use client'

import { usePathname, useSearchParams } from "next/navigation";



export default function product() {
  const pathname = useSearchParams();
  console.log(pathname.get('search'));
  // console.log(params);
  return <div> this is product page with ID ..</div>
}