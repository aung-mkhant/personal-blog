
import Navigation from "@/components/Navigation";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Literata, } from 'next/font/google'
import { Young_Serif } from 'next/font/google';
import Footer from "@/components/Footer";

export const youngSerif = Young_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-young-serif',
});

export const literata = Literata({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-literata',
});


export const metadata = {
  title: "Amk's Portfolio",
  description: "Portfolio of Aung Min Khant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`
    ${youngSerif.variable} ${literata.variable}`}>

      <body className="bg-bg text-text">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col px-4">
            <nav className="min-h-10 pt-4 md:pt-8 sm:min-h-14 my-6">
              <Navigation />
            </nav>

            <main className="max-w-3xl mx-auto w-full">
              {children}
            </main>
            <GoogleAnalytics gaId="G-46B83GC0TG" />
            <footer className="max-w-3xl w-full mx-auto pt-12 ">
              <Footer />
            </footer>


          </div>

        </ThemeProvider>

      </body>


    </html >
  );
}
