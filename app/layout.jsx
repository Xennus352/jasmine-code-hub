import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jasmine Code Hub",
  description: "Learning code with us!",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-col justify-between">
            {children}
            <div className="mt-20">
              <Nav />
            </div>
            <Toaster />
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
