import PageLayout from "../components/PageLayout";

const projectItems = [
  {
    title: "Project A",
    date: "Software Development",
    description:
      "A full-stack web application for a non-profit organization, built with React and Node.js.",
    link: "#",
  },
  {
    title: "Project B",
    date: "Graphic Design",
    description:
      "A branding and identity package for a small business, including a logo, business cards, and a website.",
    link: "#",
  },
  {
    title: "Project C",
    date: "Mobile App Development",
    description:
      "A mobile app for a startup, designed to help users track their fitness goals.",
    link: "#",
  },
];

export default function Freelance() {
  return (
    <PageLayout>
      <h1 className="text-7xl font-normal mb-8">Freelance</h1>
      <div
        className="flex flex-col md:flex-row gap-16 mb-16"
        style={{ fontFamily: "var(--font-inclusive-sans)" }}
      >
        <div className="flex-1">
          <h2 className="text-3xl font-normal mb-4">Development</h2>
          <div className="space-y-2">
            <p>$85/hour. Inquire for project-based quote or questions.</p>
            <p>
              Available for full-stack web development, programming tasks,
              technical documentation, quality assurance &#38; testing, WYSIWYG
              e.g. Webflow / Kajabi
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-normal mb-4">Design</h2>
          <div className="space-y-2">
            <p>$50/hour. Inquire for project-based quote or questions.</p>
            <p>
              Available for graphic design, branding &#38; identity, UX testing,
              UI design &#38; framework, Canva design &#38; setup
            </p>
          </div>
        </div>
      </div>

      <div style={{ fontFamily: "var(--font-inclusive-sans)" }}>
        <h2 className="text-3xl font-normal mb-8">Past Projects</h2>
        <div
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory custom-scrollbar"
          style={{ fontFamily: "var(--font-inclusive-sans)" }}
        >
          {projectItems.map((item, i) => (
            <article
              key={i}
              className="w-[80vw] md:w-[60vw] lg:w-[500px] shrink-0 snap-start flex flex-col"
            >
              <h2 className="text-2xl font-normal mb-2">{item.title}</h2>
              <p className="mb-4 text-sm opacity-70">{item.date}</p>
              <p className="mb-4 flex-1">{item.description}</p>
              <div>
                {item.link && (
                  <a
                    target="_blank"
                    href={item.link}
                    className="inline-block px-4 py-2 border border-current hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-200"
                  >
                    View Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
