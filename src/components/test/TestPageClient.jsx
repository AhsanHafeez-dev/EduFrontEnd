"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function TestPageClient() {
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Test Page (Dynamic + Client)</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 rounded text-white"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
    </div>
  );
}
