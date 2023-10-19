"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Button from "@modules/common/components/button"
import Hamburger from "@modules/common/components/hamburger"
import Typography from "@modules/common/components/typography"
import Logo from "@modules/common/icons/logo"
import Search from "@modules/common/icons/search"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SwitcherLang from "@modules/layout/components/switcher-lang"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import Link from "next/link"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const t = useTranslations("layout.navbar")

  return (
    <div className={clsx("sticky top-0 z-50")}>
      <header className={clsx("h-16 bg-white shadow-md")}>
        <nav
          className={clsx(
            "flex items-center justify-between h-full max-w-7xl small:mx-auto mx-2"
          )}
        >
          <div className="flex gap-4 items-center h-full">
            <Link href="/">
              <Logo />
            </Link>
            <div className="hidden small:flex">
              <Typography variant="subtitle2">{t("category")}</Typography>
            </div>
            <div className="">
              <Search size={20} />
            </div>
          </div>

          <div className="small:hidden h-full flex items-center">
            <Hamburger setOpen={toggle} />
          </div>

          <div className="small:flex gap-4 hidden items-center h-full">
            <SwitcherLang />
            <CartDropdown />
            <div className="flex items-center gap-x-6 h-full">
              <Button variant="medium">
                <Link href="/account">{t("signin")}</Link>
              </Button>
            </div>
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
