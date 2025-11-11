// pages/test.js
"use client";
import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={() => router.push("/")}>Go Home</button>
    </div>
  );
}
