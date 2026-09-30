import "./globals.css";

export const metadata = {
  title: "GigLink Africa",
  description:
    "Find, compare and book trusted event professionals across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}