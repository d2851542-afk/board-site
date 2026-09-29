
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доска объявлений",
  description: "Покупка, продажа и объявления",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
