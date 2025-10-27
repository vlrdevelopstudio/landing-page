"use client";
import { headerData } from "@/constant/data";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = ({ activeSection }: { activeSection: string}) => {
  // const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-dark-blue capitalize font-semibold text-base">
      {headerData?.map((item) => {
        const isActive = item?.href === `/#${activeSection}`;
        return (
          <Link
            key={item?.href || item?.title}
            href={item?.href}
            className={`relative group hover:text-light-blue hoverEffect ${isActive ? "text-light-blue" : ""}`}
          >
            {item?.title}
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-light-blue group-hover:w-1/2 hoverEffect group-hover:right-0 ${
                isActive ? "w-1/2" : ""
              }`}
            />
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-light-blue group-hover:w-1/2 hoverEffect group-hover:left-0 ${
                isActive ? "w-1/2" : ""
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
