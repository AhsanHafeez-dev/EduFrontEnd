// src/app/test/page.jsx
export const dynamic = "force-dynamic"; // ensures server-side render on every request

import TestPageClient from "@/components/test/TestPageClient";

export default function TestPage() {
  return <TestPageClient />;
}
