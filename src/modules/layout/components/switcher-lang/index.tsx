import { Popover } from "@headlessui/react"
import Typography from "@modules/common/components/typography"
import ChevronDown from "@modules/common/icons/chevron-down"
import clsx from "clsx"
import { useLocale, useTranslations } from "next-intl"
import Link from "next-intl/link"

const SwitcherLang = () => {
  const t = useTranslations("layout.navbar")
  const locale = useLocale()

  return (
    <Popover className="relative h-full flex items-center">
      {({ open }) => (
        <>
          <Popover.Button className="flex gap-1 items-center outline-none px-2 py-1 hover:bg-primary-ligher active:bg-primary-light focus:ring-2 focus:ring-primary-main rounded-lg">
            <Typography variant="subtitle2">{t("trans")}</Typography>
            <ChevronDown
              className={clsx("transition-all duration-300", {
                "rotate-180 transform": open,
              })}
            />
          </Popover.Button>

          <Popover.Panel className="absolute bg-white rounded-md z-20 top-full overflow-hidden shadow-md">
            <div className="grid">
              <Link
                href="/"
                locale="vi"
                className={`whitespace-nowrap px-4 py-2 hover:bg-primary-ligher ${
                  locale === "vi" && "text-primary-main"
                }`}
              >
                <Typography variant="subtitle2">Tiếng Việt</Typography>
              </Link>
              <Link
                href="/"
                locale="en"
                className={`whitespace-nowrap px-4 py-2 hover:bg-primary-ligher ${locale ==='en'&&'text-primary-main'}`}
              >
                <Typography variant="subtitle2">English</Typography>
              </Link>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}
export default SwitcherLang
