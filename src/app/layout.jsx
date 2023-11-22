import './globals.css'

export const metadata = {
  title: 'Todfad movies',
  description: 'Streaming site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
