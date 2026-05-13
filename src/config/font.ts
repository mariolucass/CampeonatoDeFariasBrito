import localFont from "next/font/local";

export const conduit = localFont({
  src: [
    {
      path: "../../public/fonts/Conduit ITC Regular.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Conduit ITC Regular.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Conduit ITC Regular.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Conduit ITC Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Conduit ITC Bold.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Conduit ITC Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Conduit ITC Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Conduit ITC Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-conduit",
  display: "swap",
  preload: true,
});
