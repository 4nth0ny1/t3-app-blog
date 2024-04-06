import "~/styles/globals.css";

import { Poppins } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "../app/_components/Navbar";
import Footer from "../app/_components/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export const metadata = {
  title: { default: "Golf Kept Simple", template: "%s - Golf Kept Simple" },
  description:
    "Your one stop shop for learning a simple method of improving at golf.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme="lemonade" className={`font-sans ${poppins.variable}`}>
        <TRPCReactProvider>
          <Navbar />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
