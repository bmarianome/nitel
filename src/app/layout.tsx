import "../styles/globals.css";

export const viewport = {
  width: "device-width",
  themeColor: "#111827",
};

export const metadata = {
  title: "Nitel te conecta",
  description:
    "Conectá todos tus dispositivos y disfrutá tus actividades con el plan de internet que más te convenga. Mirá contenido, hacé videollamadas, jugá online, ¡sin límites!",

  openGraph: {
    title: "Nitel te conecta",
    description:
      "Conectá todos tus dispositivos y disfrutá tus actividades con el plan de internet que más te convenga. Mirá contenido, hacé videollamadas, jugá online, ¡sin límites!",
    url: "https://nitel.com.ar",
    siteName: "Nitel",
    images: [
      {
        url: "/social-media-card.png",
        width: 1200,
        height: 600,
      },
    ],
    locale: "es-AR",
    type: "website",
  },

  icons: {
    icon: {
      url: "/favicon-nitel.png",
      type: "image/png",
    },
    shortcut: {
      url: "/favicon-nitel.png",
      type: "image/png",
    },
    shortcutIcon: {
      url: "/favicon-nitel.png",
      type: "image/png",
    },
    apple: [
      {
        url: "/favicon-nitel.png",
        sizes: "32x32",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    domain: "nitel.com.ar",
    title: "Nitel te conecta",
    url: "https://nitel.com.ar",
    description: "The React Framework for the Web",
    images: {
      url: "/social-media-card.png",
    },
  },

  authors: [{ name: "bmariano", url: "https://bmariano.me" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
