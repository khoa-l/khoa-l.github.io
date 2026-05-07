import PageLayout from "../components/PageLayout";

type ProjectItem = {
  title: string;
  date: string;
  description: string;
  link?: string;
  pdf?: string;
};

const projectItems: ProjectItem[] = [
  // {
  //   title: "Freelance",
  //   date: "Various Projects",
  //   description:
  //     "Various technical software development, user interface design, and graphic design projects for freelance clients. For more details about my freelance projects and my rates, please visit the following secret, hidden page.",
  //   link: "/freelance",
  // },

  {
    title: "Hack4Impact",
    date: "Jan 2024 - Present",
    description:
      "Leading Hack4Impact a 501(c)(3) non-profit dedicated to building full-stack web applications for other non-profits and cultivating a community of socially conscious and involved do-gooders in technology. Our programming involves 13 chapters across North America running both education programs and service-learning projects in their local communities and beyond.",
    link: "https://github.com/hack4impact",
  },
  {
    title: "Hack4Impact Branding & Identity",
    date: "Nov 2025 - Dec 2026",
    description:
      "Complete branding and identity guidelines for Hack4Impact, a 501(c)(3) non-profit. Developed in Figma and implemented across the organization and all 13 chapters.",
    link: "https://www.figma.com/design/I5E8LJytB6tWGCGUjYTvWM/Brand-Identity?node-id=3250-7559&p=f&t=PogznOV4BmReIId7-0",
  },
  {
    title: "Hack4Impact Starter Pack",
    date: "Jul - Aug 2023",
    description:
      "Created for Hack4Impact Cal Poly's interview process, the Hack4Impact Starter Pack is a series of self-guided modules teaching students the basics of HTML, CSS, and Git version control through an example project. Distributed and managed participation for 200+ student applicants.",
    link: "https://github.com/hack4impact-calpoly/starter-pack",
  },
];

export default function Projects() {
  return (
    <PageLayout noScroll>
      <div className="flex flex-col h-full min-h-0">
        <h1 className="text-4xl font-normal mb-6 shrink-0">Projects</h1>
        <div
          className="flex flex-col gap-8 flex-1 min-h-0 overflow-y-auto"
          style={{ fontFamily: "var(--font-inclusive-sans)" }}
        >
          {projectItems.map((item, i) => (
            <article key={i} className="flex flex-col max-w-2xl">
              <h2 className="text-2xl font-normal mb-2">{item.title}</h2>
              <p className="mb-3 text-sm opacity-70">{item.date}</p>
              <p className="mb-3">{item.description}</p>
              <div>
                {item.pdf && (
                  <a
                    href={item.pdf}
                    download={item.pdf !== "#"}
                    className="inline-block px-4 py-2 border border-current hover:bg(--foreground) hover:text(--background) transition-colors duration-200"
                  >
                    Download
                  </a>
                )}
                {item.link && (
                  <a
                    target="_blank"
                    href={item.link}
                    className="inline-block px-4 py-2 border border-current hover:bg(--foreground) hover:text(--background) transition-colors duration-200"
                  >
                    View Link
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
