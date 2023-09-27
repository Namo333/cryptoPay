import React from "react";

export const Btn = ({ state, type, BG, size, className, text = "Get started", divClassName }) => {
  return (
    <button
      className={`inline-flex flex-col items-center gap-[10px] rounded-[900px] justify-center relative all-[unset] box-border ${
        BG === "dark" ? "border border-solid" : ""
      } ${
        state === "default" && BG === "dark"
          ? "border-white-60"
          : BG === "dark" && state === "hover"
          ? "border-white"
          : ""
      } ${size === "small" ? "px-[32px] py-[12px]" : "px-[42px] py-[18px]"} ${
        state === "default" && type === "general"
          ? "bg-[#41a4df]"
          : type === "general" && state === "hover"
          ? "bg-deep-blue"
          : state === "default" && type === "secondary" && BG === "light"
          ? "bg-blue-12"
          : type === "secondary" && BG === "light" && state === "hover"
          ? "bg-blue-16"
          : ""
      } ${className}`}
    >
      <div
        className={`self-stretch mt-[-1.00px] text-center relative ${
          size === "small" ? "font-mobile-button" : "font-desktop-button"
        } ${
          size === "small"
            ? "tracking-[var(--mobile-button-letter-spacing)]"
            : "tracking-[var(--desktop-button-letter-spacing)]"
        } ${
          size === "small"
            ? "text-[length:var(--mobile-button-font-size)]"
            : "text-[length:var(--desktop-button-font-size)]"
        } ${
          size === "small"
            ? "[font-style:var(--mobile-button-font-style)]"
            : "[font-style:var(--desktop-button-font-style)]"
        } ${type === "secondary" && BG === "light" ? "text-deep-blue" : "text-white"} ${
          size === "small"
            ? "font-[number:var(--mobile-button-font-weight)]"
            : "font-[number:var(--desktop-button-font-weight)]"
        } ${
          size === "small"
            ? "leading-[var(--mobile-button-line-height)]"
            : "leading-[var(--desktop-button-line-height)]"
        } ${divClassName}`}
      >
        {text}
      </div>
    </button>
  );
};
