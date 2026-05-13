import type { Metadata, Viewport } from "next";

const url = "https://campeonato-fariasbritense-de-futebol-2023.vercel.app";

export const defaultMetadata: Metadata = {
  title: {
    default: "Campeonato Fariasbritense de Futebol · Temporada 2023",
    template: "%s · Campeonato Fariasbritense",
  },
  description:
    "Acompanhe a classificação, tabela de jogos, galeria de fotos e documentos oficiais do Campeonato Fariasbritense de Futebol — Temporada 2023.",
  keywords: [
    "Campeonato Fariasbritense",
    "futebol",
    "campeonato de futebol",
    "tabela de jogos",
    "classificação",
    "temporada 2023",
    "Farias Brito",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: url,
    siteName: "Campeonato Fariasbritense de Futebol",
    title: "Campeonato Fariasbritense de Futebol · Temporada 2023",
    description:
      "Classificação geral, destaques da rodada, galeria de fotos e documentos oficiais. Tudo sobre o Campeonato Fariasbritense de Futebol.",
    images: [
      {
        url: "https://campeonato-fariasbritense-de-futebol-2023.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Campeonato Fariasbritense de Futebol — Temporada 2023",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Campeonato Fariasbritense de Futebol · Temporada 2023",
    description:
      "Classificação, tabela de jogos, fotos da rodada e documentos oficiais do Campeonato Fariasbritense.",
    images: [
      "https://campeonato-fariasbritense-de-futebol-2023.vercel.app/og-image.png",
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",
  alternates: {
    canonical: url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "sports",
};

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F7" },
    { media: "(prefers-color-scheme: dark)", color: "#1D1D1F" },
  ],
};
