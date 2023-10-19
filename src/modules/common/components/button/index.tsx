import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "medium" | "large" | "small"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "medium",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-primary-main text-white rounded-lg",
        {
          "py-1 px-2 text-[13px] leading-[22px] font-bold": variant === "small",
          "text-[14px] leading-[24px] font-bold py-[6px] px-4":
            variant === "medium",
          "text-[15px] leading-[26px] font-bold px-[22px] py-[11px]":
            variant === "large",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
