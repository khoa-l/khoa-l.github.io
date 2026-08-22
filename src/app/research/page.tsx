import PageLayout from "../../components/PageLayout";

type ResearchItem = {
  title: string;
  subtitle?: string;
  description: string;
  pdf?: string;
  link?: string;
};

const researchItems: ResearchItem[] = [
  {
    title: "Self-Perception Theory and Algorithmic Preference Formation",
    subtitle: "Graduate Thesis, Ongoing Research",
    description:
      "This paper investigates the idea of self-perception theory as a model for explaining how preferences are formed and adopted from exposure to algorithmically curated content. This study tests users' self-perception by replicating a choice-blindness survey in the context of Reddit posts.",
  },
  {
    title: "Custom Feeds for Mitigating Problematic Social Media Usage",
    subtitle: "Ongoing Research",
    description:
      "An investigation into customized content feeds as a design pattern for mitigating problematic social media usage. Intended to be run as a diary study. ",
  },
  {
    title:
      "Learned Monkeys: Emergent Properties of Deep Reinforcement Learning Generated Networks",
    subtitle:
      "Anegawa, S., Ho, I., Ly, K., Rounthwaite, J., Migler, T - Complex Networks XIV",
    description:
      "An analysis of social network structures within primate communities, examining the relationships and hierarchies that form between individuals. This research explores how network graph theory can be applied to understand animal social behavior.",
    pdf: "/monkey.pdf",
  },
];

export default function Research() {
  return (
    <PageLayout noScroll>
      <div className="flex flex-col h-full min-h-0">
        <h1 className="text-4xl font-normal mb-6 shrink-0">Research</h1>
        <div
          className="flex flex-col gap-8 flex-1 min-h-0 overflow-y-auto"
          style={{ fontFamily: "var(--font-inclusive-sans)" }}
        >
          {researchItems.map((item, i) => (
            <article key={i} className="flex flex-col max-w-2xl">
              <h2 className="text-2xl font-normal mb-2">{item.title}</h2>
              <p className="mb-3 text-sm opacity-70">{item.subtitle}</p>
              <p className="mb-3">{item.description}</p>
              <div>
                {item.pdf && (
                  <a
                    href={item.pdf}
                    download
                    className="inline-block px-4 py-2 border border-current hover:bg(--foreground) hover:text(--background) transition-colors duration-200"
                  >
                    Download PDF
                  </a>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-current hover:bg(--foreground) hover:text(--background) transition-colors duration-200"
                  >
                    View Paper
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
