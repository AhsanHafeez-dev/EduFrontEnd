"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function TestPageClient() {
  const router = useRouter();
  const pathname = usePathname();

  // Optional: useEffect to react to URL changes
  React.useEffect(() => {
    console.log("Navigated to:", pathname);
  }, [pathname]);

  return (
    <div key={pathname} className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Test Page (Dynamic + Client)</h1>
      <p>This page is fully dynamic and renders fresh content on every navigation.</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
    </div>
  );
}
