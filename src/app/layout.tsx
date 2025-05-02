import React from 'react'
import App from './page'
import './index.css'

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
          <App/>
      </body>
    </html>
  );
}