import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const leagueSpartan = Inter({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Simlex Portfolio Website",
    description: "Multi-talented business oriented software engineer and designer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${leagueSpartan.className} antialiased`}
            >
                {/* <Layout children={children} /> */}
                {children}
            </body>
        </html>
    );
}
