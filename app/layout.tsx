import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import { Outfit } from "next/font/google";
import StarBackground from "@/components/StarBackground";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Gan-Erdene - Portfolio",
  description: "Backend Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} min-h-screen bg-black text-white antialiased`}>
        <StarBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
