
import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/ClientProvider";




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
      <body >
        
           <ClientProvider>
            {children}
           </ClientProvider>
        
        
        </body>
    </html>
  );
}
