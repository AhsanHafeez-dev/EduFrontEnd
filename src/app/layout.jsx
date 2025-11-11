import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/auth-context";
import InstructorContext from "@/context/instructor-context";
import StudentProvider from "@/context/student-context";
import ProtectedLayout from "./ProtectedLayout"; // move to a separate file

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Edu Platform",
  description: "Dynamic Next.js app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <AuthProvider>
          <InstructorContext>
            <StudentProvider>
              <ProtectedLayout>{children}</ProtectedLayout>
            </StudentProvider>
          </InstructorContext>
        </AuthProvider>
      </body>
    </html>
  );
}
