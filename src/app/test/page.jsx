// src/app/test/page.jsx
"use client"; // only if you need client-side features like useRouter

// Do NOT export revalidate
export const dynamic = "force-dynamic"; // This makes the page SSR on every request

import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();
  console.log("test page added");

  return (
    <div>
      <h1>Test Page (Dynamic)</h1>
      <button onClick={() => router.push("/")}>Go Home</button>
    </div>
  );
}
