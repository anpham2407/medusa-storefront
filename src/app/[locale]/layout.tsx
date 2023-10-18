import Providers from "@modules/providers"
import "styles/globals.css"
import { notFound } from "next/navigation"
import { Public_Sans } from "next/font/google"

const locales = ["en", "vi"]
const public_sans = Public_Sans({ subsets: ["latin"] })

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  return (
    <html lang={locale}>
      <body className={public_sans.className}>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
