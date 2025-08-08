import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Klip",
  description: "AI receipts. Simple crypto. Smart control.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <body className="font-sora w-full overflow-x-hidden min-h-screen bg-[#FFFFFF] antialiased">
        <main className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
          <section className="w-full px-[16px] flex flex-col items-center">
            <div className="w-full mb-10 md:mb-[120px] lg:mb-[120px]">
              <Header />
            </div>

            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
