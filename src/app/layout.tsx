import { IChildren } from "@/interfaces/global";
import { Footer } from "@/layouts/Footer";
import { Header } from "@/layouts/Header";
import localfont from "@next/font/local";
import "./globals.css";
import Head from "./head";

const conduit = localfont({
  src: [
    { path: "../../public/fonts/Conduit ITC Regular.otf", weight: "100" },
    { path: "../../public/fonts/Conduit ITC Regular.otf", weight: "200" },
    { path: "../../public/fonts/Conduit ITC Regular.otf", weight: "300" },
    { path: "../../public/fonts/Conduit ITC Regular.otf", weight: "400" },
    { path: "../../public/fonts/Conduit ITC Bold.otf", weight: "500" },
    { path: "../../public/fonts/Conduit ITC Bold.otf", weight: "600" },
    { path: "../../public/fonts/Conduit ITC Bold.otf", weight: "700" },
    { path: "../../public/fonts/Conduit ITC Bold.otf", weight: "800" },
  ],

  variable: "--font-conduit",
});

const RootLayout = ({ children }: IChildren) => (
  <html lang="pt-br" suppressHydrationWarning={true}>
    <Head />

    <body className={`${conduit.variable} font-sans`}>
      {/* <NavBar /> */}
      <Header />

      {children}

      <Footer />
    </body>
  </html>
);

export default RootLayout;
