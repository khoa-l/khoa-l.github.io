"use client"; // Add this directive

import Image from "next/image";
import CircleLink from "./components/CircleLink";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to update state based on dark class
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Set initial state
    updateTheme();

    // Observe class changes on the html element
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const lightModeCredit = (
    <>
      Photo by{" "}
      <a
        href="https://unsplash.com/@mogilat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        className="underline"
      >
        Viktor Mogilat
      </a>{" "}
      on{" "}
      <a
        href="https://unsplash.com/photos/white-clouds-and-blue-sky-jYbBn4m3sW0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        className="underline"
      >
        Unsplash
      </a>
    </>
  );

  const darkModeCredit = (
    <>
      Photo by{" "}
      <a
        href="https://unsplash.com/@meinayin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        className="underline"
      >
        Meina Yin
      </a>{" "}
      on{" "}
      <a
        href="https://unsplash.com/photos/blue-sky-and-white-clouds-during-daytime-E6SsCqgITOo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        className="underline"
      >
        Unsplash
      </a>
    </>
  );

  return (
    <main className="home-page relative min-h-screen">
      <Image
        src="/sky.jpg"
        alt=""
        fill
        className="object-cover brightness-[0.75] transition-opacity duration-500 ease-in-out dark:opacity-0"
        priority
      />
      <Image
        src="/night.jpg"
        alt=""
        fill
        className="object-cover brightness-[1] transition-opacity duration-500 ease-in-out opacity-0 dark:opacity-100"
      />
      <Image
        src="/fold.jpg"
        alt=""
        fill
        className="object-cover mix-blend-screen opacity-50 pointer-events-none"
      />

      <div className="relative z-10 pt-16 px-8 pb-8">
        <h1 className="text-7xl w-fit px-4 pt-1 pb-4 mb-16 leading-none text-[#f0d500]">
          Khoa Ly
        </h1>
        <nav
          className="flex flex-col gap-2 text-3xl text-[#f0d500]"
          style={{ fontFamily: "var(--font-inclusive-sans)" }}
        >
          <CircleLink href="/about" rotation={-3} pathIndex={0} color="#f0d500">
            About
          </CircleLink>
          <CircleLink
            href="/projects"
            rotation={2}
            pathIndex={1}
            color="#f0d500"
          >
            Projects
          </CircleLink>
          <CircleLink
            href="/research"
            rotation={-1}
            pathIndex={2}
            color="#f0d500"
          >
            Research
          </CircleLink>
        </nav>
      </div>
      <p className="absolute bottom-4 right-4 z-10 text-sm text-white/80">
        {isDarkMode ? darkModeCredit : lightModeCredit}
      </p>
    </main>
  );
}

