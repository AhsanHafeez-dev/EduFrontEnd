// pages/test.js
"use client";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";

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
