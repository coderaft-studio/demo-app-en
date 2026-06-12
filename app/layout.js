import "./globals.css";

export const metadata = {
  title: "Voyaje — Your Smart Travel Companion",
  description: "Discover the world effortlessly. Plan trips, find hidden gems, and travel smarter with Voyaje — the travel app loved by adventurers worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
