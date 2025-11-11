// src/app/test/page.jsx
export const dynamic = "force-dynamic"; // server-side dynamic

export default function TestPage() {
  return (
    <div>
      <h1>Test Page (Dynamic SSR)</h1>
      <a href="/">Go Home</a>
    </div>
  );
}
