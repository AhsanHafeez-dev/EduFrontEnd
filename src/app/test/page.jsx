// Server Component → handles dynamic SSR
export const dynamic = "force-dynamic"; // forces server rendering on every request

import TestPageClient from "@/components/test/TestPageClient";

export default function TestPage() {
  return <TestPageClient />;
}
