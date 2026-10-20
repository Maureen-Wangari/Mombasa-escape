
import "./globals.css";

export const metadata = {
  title: "Our Little Mombasa Escape ♡",
  description:
    "Our romantic Mombasa getaway planner — itinerary, packing list, food ideas, and memories made together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
