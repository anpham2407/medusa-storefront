import Button from "@modules/common/components/button"
import Typography from "@modules/common/components/typography"
import UnderlineLink from "@modules/common/components/underline-link"
import { useTranslations } from "next-intl"
import Image from "next/image"

const Hero = () => {
  const t = useTranslations("home.hero")
  return (
    <div className="flex flex-col items-center bg-gray-100 h-screen justify-center">
      <div className="relative w-60 h-60">
        <Image
          src="/illustration.svg"
          alt={"hero illustration"}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Typography variant="h2" className="text-center">
          {t("title")}
        </Typography>
        <Typography variant="body1" className="text-center">
          {t("content")}
        </Typography>
        <Button variant="large" className="w-fit">
          {t("discover")}
        </Button>
      </div>
    </div>
  )
}

export default Hero
