import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juhi Bhandari | Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
