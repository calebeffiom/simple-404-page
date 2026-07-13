import type { Metadata } from "next";
import "./globals.css";
const title = "404 Page"
const description = "Nostalgic 404 page concept"

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://nostalgic-404-page.vercel.app/',
    siteName: title,
    images: [
      {
        url: "image/preview.png", // place preview.png inside /public
        width: 1200,
        height: 630,
        alt: "Simple 404 page concept",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/image/preview.png"], // same image as above
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
