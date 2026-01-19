import Image from "next/image";
import CircleLink from "./components/CircleLink";

export default function Home() {
  return (
    <main className="home-page relative min-h-screen">
      <Image
        src="/sky.jpg"
        alt=""
        fill
        className="object-cover brightness-[0.75]"
        priority
      />
      <Image
        src="/fold.jpg"
        alt=""
        fill
        className="object-cover mix-blend-screen opacity-50 pointer-events-none"
      />

      <div className="relative z-10 pt-16 px-8 pb-8">
        <h1 className="text-7xl w-fit px-4 pt-1 pb-4 mb-16 leading-none text-[#f0d500]">Khoa Ly</h1>
        <nav className="flex flex-col gap-2 text-3xl text-[#f0d500]" style={{ fontFamily: "var(--font-inclusive-sans)" }}>
          <CircleLink href="/about" rotation={-3} pathIndex={0} color="#f0d500">About</CircleLink>
          <CircleLink href="/projects" rotation={2} pathIndex={1} color="#f0d500">Projects</CircleLink>
          <CircleLink href="/research" rotation={-1} pathIndex={2} color="#f0d500">Research</CircleLink>
        </nav>
      </div>
      <p className="absolute bottom-4 right-4 z-10 text-sm text-white/80">
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
      </p>
    </main>
  );
}
