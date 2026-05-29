import "./globals.css";

export const metadata = {
  title: "Bloom Ink Art 🌸",
  description: "Bloom Ink Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
