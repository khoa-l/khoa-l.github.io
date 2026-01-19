import CircleLink from "./CircleLink";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen flex flex-col">
      <div
        className="absolute inset-0 mix-blend-multiply opacity-30 pointer-events-none invert dark:invert-0 dark:mix-blend-screen dark:opacity-20"
        style={{
          backgroundImage: "url('/fold2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 pt-16 px-8 pb-8 flex-1">
        {children}
      </div>
      <nav
        className="relative z-10 p-8 pt-0 flex flex-wrap justify-center gap-8 text-lg"
        style={{ fontFamily: "var(--font-inclusive-sans)" }}
      >
        <CircleLink href="/" rotation={-2} pathIndex={4}>Home</CircleLink>
        <CircleLink href="/about" rotation={3} pathIndex={1}>About</CircleLink>
        <CircleLink href="/projects" rotation={-1} pathIndex={2}>Projects</CircleLink>
        <CircleLink href="/research" rotation={2} pathIndex={3}>Research</CircleLink>
      </nav>
    </main>
  );
}
