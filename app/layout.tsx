import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Royal Oyo Kitchen - Fine Dining Experience",
  description: "Royal Oyo Kitchen Fine Dining — A luxurious culinary experience featuring curated tasting menus, chef's table exclusives, and premium beverage pairings in an elegant ambiance.",
  icons: {
    icon: "https://ext.same-assets.com/1029202330/3559513118.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
