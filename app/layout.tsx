import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

export const metadata: Metadata = {
    title: "PropertyPulse",
    description: "Find the best place which you deserve",
    keywords: ["rental", "find rentals", "find properties"]
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthProvider>
            <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <NavBar/>
            <main>{children}</main>
            <Footer/>
            <ToastContainer/>
            </body>
            </html>
        </AuthProvider>
    );
}
