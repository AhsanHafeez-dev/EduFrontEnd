import TestPageClient from "@/components/test/TestPageClient";

export default async function TestPage() {
  const serverTime = await getServerTime();

  return <TestPageClient serverTime={serverTime} />;
}
