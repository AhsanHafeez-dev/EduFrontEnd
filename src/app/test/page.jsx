// pages/test.js
"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { useRouter } from "next/navigation";


export default function TestPage() {
  const router = useRouter();
  console.log("test page added");
  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={() => router.push("/")}>Go Home</button>
    </div>
  );
}
