import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Layout from "./components/shared/Layout";

const leagueSpartan = Raleway({ display: "swap", subsets: ["latin"] });

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
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
