import PageLayout from "../components/PageLayout";

const projectItems = [
  {
    title: "Freelance",
    date: "Various Projects",
    description:
      "Various technical software development, user interface design, and graphic design projects for freelance clients. For more details about my freelance projects and my rates, please visit the following secret, hidden page.",
    link: "/freelance",
  },
  {
    title: "Hack4Impact Starter Pack",
    date: "Self-Guided HTML, CSS, & Git Lessons",
    description:
      "Created for Hack4Impact Cal Poly's interview process, the Hack4Impact Starter Pack is a series of self-guided modules teaching students the basics of HTML, CSS, and Git version control through an example project. Distributed and managed participation for 200+ student applicants.",
    link: "https://github.com/hack4impact-calpoly/starter-pack",
  },
  {
    title: "Hack4Impact",
    date: "Social Good & Technology Non-Profit",
    description:
      "Leading Hack4Impact a 501(c)(3) non-profit dedicated to building full-stack web applications for other non-profits and cultivating a community of socially conscious and involved do-gooders in technology. Our programming involves 13 chapters across North America running both education programs and service-learning projects in their local communities and beyond.",
    pdf: "https://github.com/hack4impact",
  },
  {
    title: "Hack4Impact Branding & Identity",
    date: "Design Project",
    description:
      "Complete branding and identity guidelines for Hack4Impact, a 501(c)(3) non-profit. Developed in Figma and implemented across the organization and all 13 chapters.",
    link: "https://www.figma.com/design/I5E8LJytB6tWGCGUjYTvWM/Brand-Identity?node-id=3250-7559&p=f&t=PogznOV4BmReIId7-0",
  },
];

export default function Projects() {
  return (
    <PageLayout>
      <h1 className="text-7xl font-normal mb-8">Projects</h1>
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
              {item.pdf && (
                <a
                  href={item.pdf}
                  download={item.pdf !== "#"}
                  className="inline-block px-4 py-2 border border-current hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-200"
                >
                  Download
                </a>
              )}
              {item.link && (
                <a
                  target="_blank"
                  href={item.link}
                  className="inline-block px-4 py-2 border border-current hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-200"
                >
                  View Link
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
