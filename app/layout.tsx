import React from "react";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className = "flex justify-center bg-white">
          <div className = "w-full md:w-1/2 px-4 md:px-14">{children}</div>
        </body>
      </html>
    );
  }
  