import PageLayout from "../components/PageLayout";

const researchItems = [
  {
    title: "Self-Perception Theory and Algorithmic Preference Formation",
    date: "Graduate Thesis, Ongoing Research",
    description:
      "This paper investigates the idea of self-perception theory as a model for explaining how preferences are formed and adopted from exposure to algorithmically curated content. This study tests users' self-perception by replicating a choice-blindness survey in the context of Reddit posts.",
    pdf: "#",
  },
  {
    title:
      "Learned Monkeys: Emergent Properties of Deep Reinforcement Learning Generated Networks",
    date: "Undergraduate Research, 2023",
    description:
      "An analysis of social network structures within primate communities, examining the relationships and hierarchies that form between individuals. This research explores how network graph theory can be applied to understand animal social behavior.",
    pdf: "/monkey.pdf",
  },
  {
    title: "Custom Feeds for Mitigating Problematic Social Media Usage",
    date: "Ongoing Research",
    description:
      "An investigation into customized content feeds as a design pattern for mitigating problematic social media usage. Intended to be run as a diary study. ",
    link: "#",
  },
];

export default function Research() {
  return (
    <PageLayout>
      <h1 className="text-7xl font-normal mb-8">Research</h1>
      <div
        className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory custom-scrollbar"
        style={{ fontFamily: "var(--font-inclusive-sans)" }}
      >
        {researchItems.map((item, i) => (
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
                  Download PDF
                </a>
              )}
              {item.link && (
                <a
                  href={item.link}
                  className="inline-block px-4 py-2 border border-current hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-200"
                >
                  View Paper
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
