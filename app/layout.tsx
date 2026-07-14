import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumeet Kanhiya — Software Engineer",
  description:
    "Full-stack software engineer specializing in real-time systems, WebSocket architectures, and high-performance web applications.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "WebSocket",
    "real-time systems",
    "Next.js",
    "Three.js",
    "portfolio",
  ],
  authors: [{ name: "Sumeet Kanhiya" }],
  openGraph: {
    title: "Sumeet Kanhiya — Software Engineer",
    description:
      "Full-stack software engineer specializing in real-time systems, WebSocket architectures, and high-performance web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-silver">
        {children}
      </body>
    </html>
  );
}
