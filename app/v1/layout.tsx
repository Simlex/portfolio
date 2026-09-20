import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Layout from "../components/shared/Layout";

const leagueSpartan = Raleway({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Simlex Portfolio Website",
    description: "Multi-talented business oriented software engineer and designer",
};

export default function V1Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={leagueSpartan.className}>
            <Layout>
                {children}
            </Layout>
        </div>
    );
}
