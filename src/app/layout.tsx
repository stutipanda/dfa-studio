import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "DFA Studio — Minimization Lab", description: "Interactive DFA minimization using Myhill–Nerode table filling." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
