import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { pick } from "lodash"
import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
} from "next-intl"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLocale()
  const messages = useMessages()
  if (!messages) return null
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pick(messages, "layout.navbar")}
    >
      <Nav />
      {children}
      <Footer />
    </NextIntlClientProvider>
  )
}
