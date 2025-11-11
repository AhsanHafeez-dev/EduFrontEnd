export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
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
