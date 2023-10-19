import clsx from "clsx"
import React from "react"

type TypographyProps = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
} & React.AllHTMLAttributes<HTMLParagraphElement>

const Typography = ({
  className,
  variant = "subtitle1",
  ...props
}: TypographyProps) => {
  return (
    <p
      {...props}
      className={clsx(
        "",
        {
          "small:text-[64px] text-[40px] small:leading-[80px] leading-[50px] font-bold":
            variant === "h1",
          "small:text-[48px] text-[32px] small:leading-[64px] leading-[42px] font-bold":
            variant === "h2",
          "text-[16px] leading-[24px] font-normal": variant === "body1",
          "text-[14px] leading-[22px] font-normal": variant === "body2",
          "text-base leading-6 font-semibold": variant === "subtitle1",
          "text-sm leading-[22px] font-semibold": variant === "subtitle2",
        },
        className
      )}
    ></p>
  )
}

export default Typography
