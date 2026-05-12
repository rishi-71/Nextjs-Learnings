import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Full-Stack-Project",
  description: "Build using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body >{children}</body>
    </html>
  );
}
