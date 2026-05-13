import { conduit } from "@/config/font";
import { defaultMetadata, defaultViewport } from "@/config/metadata";
import { ContextProvider } from "@/context";
import { IChildren } from "@/interfaces/global";
import { ArrowFooter } from "@/layouts/ArrowFooter";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = defaultMetadata;
export const viewport = defaultViewport;

const RootLayout = ({ children }: IChildren) => (
  <html lang="pt-br" suppressHydrationWarning className={cn(conduit.variable)}>
    <body className="font-sans">
      <ContextProvider>
        <Header />
        {children}
        <Footer />
        <ArrowFooter />
      </ContextProvider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
