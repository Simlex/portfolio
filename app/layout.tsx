import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Similoluwa Afolabi",
    description: "Product engineer and designer. Founder and CTO at Ticketsdeck.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
