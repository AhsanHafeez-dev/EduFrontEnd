"use client";

import { useAuthContext } from "@/context/auth-context";
import RouteGuard from "@/components/common-form/Route-guard";

export default function ProtectedLayout({ children }) {
  const { auth } = useAuthContext();

  return (
    <RouteGuard authenticated={auth?.authenticate} user={auth?.role}>
      {children}
    </RouteGuard>
  );
}
