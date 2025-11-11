"use client";
import RouteGuard from "@/components/common-form/Route-guard";
import { useAuthContext } from "@/context/auth-context";

export default function ProtectedLayout({ children }) {
  const { auth } = useAuthContext();

  return (
    <RouteGuard authenticated={auth?.authenticate} user={auth?.role}>
      {children}
    </RouteGuard>
  );
}
