// src/app/test/page.jsx
export const dynamic = "force-dynamic";

async function getServerTime() {
  return new Date().toISOString();
}

export default async function TestPage() {
  const serverTime = await getServerTime();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Test Page (Dynamic SSR)</h1>
      <p>Server time: {serverTime}</p>
      <a
        href="/"
        className="mt-4 inline-block px-4 py-2 bg-blue-600 rounded text-white"
      >
        Go Home
      </a>
    </div>
  );
}
