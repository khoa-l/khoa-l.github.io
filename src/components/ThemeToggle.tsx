"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Path overlaps at the end like an imperfect hand-drawn circle
const handDrawnPath = "M 14,38 C 4,28 6,14 25,6 C 48,0 78,2 92,18 C 102,30 96,44 78,50 C 52,58 22,52 8,42 C 0,34 4,22 16,14 C 30,6 50,2 70,6 C 84,9 92,16 94,26";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const color = isHome ? "#f0d500" : "var(--foreground)";

  return (
    <button
      onClick={toggle}
      className="group absolute top-4 right-4 z-20 px-3 py-1 text-xl hover:italic transition-all duration-300"
      style={{ fontFamily: "var(--font-inclusive-sans)", color }}
    >
      <svg
        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        viewBox="0 0 100 54"
        preserveAspectRatio="none"
      >
        <path
          d={handDrawnPath}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="[stroke-dasharray:400] [stroke-dashoffset:400] group-hover:[stroke-dashoffset:0] transition-all duration-500"
          style={{
            transform: "rotate(3deg)",
            transformOrigin: "center",
          }}
        />
      </svg>
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
