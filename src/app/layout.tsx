import type { Metadata } from "next";
import { Ubuntu_Mono } from 'next/font/google'
import "./globals.css";
import Footer from '../../components/Footer'

const ubuntuMono = Ubuntu_Mono({
  variable: "--ubuntuwhite",
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Ethan Matta Portfolio",
  description: "placeholder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${ubuntuMono.variable} antialiased min-h-screen flex flex-col`}>
        <main className="flex-grow main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}