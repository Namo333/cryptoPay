import React from "react";

export const Tag = ({ state, className, divClassName, text = "ETH" }) => {
  return (
    <div className={`inline-flex items-center gap-[10px] px-[12px] py-[4px] relative rounded-[900px] ${className}`}>
      <div
        className={`relative w-fit mt-[-1.00px] font-desktop-description font-[number:var(--desktop-description-font-weight)] text-[#a3a7ae] text-[length:var(--desktop-description-font-size)] tracking-[var(--desktop-description-letter-spacing)] leading-[var(--desktop-description-line-height)] whitespace-nowrap [font-style:var(--desktop-description-font-style)] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
