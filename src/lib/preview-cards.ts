import type { PreviewCardContent } from "@/src/components/preview-card";

const placeholderImage = {
  imageSrc: "https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300",
  imageAlt: "Station Hofplein signage in Rotterdam, Netherlands",
};

export const previewCards = {
  humanComputerInteraction: {
    href: "https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction",
    ...placeholderImage,
    title: "Human-computer interaction",
    description:
      "is the study of how people interact with computers and how to design technology that is usable and useful.",
  },
  explainableAi: {
    href: "https://en.wikipedia.org/wiki/Explainable_artificial_intelligence",
    ...placeholderImage,
    title: "Explainable AI & interpretable ML",
    description:
      "is a set of methods and techniques that make the outputs of machine learning models understandable to humans.",
  },
  scientificComputing: {
    href: "https://en.wikipedia.org/wiki/Computational_science",
    ...placeholderImage,
    title: "Scientific computing & visualizations",
    description:
      "combines numerical methods, algorithms, and visualization to solve and communicate complex scientific problems.",
  },
  silasHsu: {
    href: "#",
    ...placeholderImage,
    title: "Dr. Silas Hsu",
    description: "Placeholder — add a bio for Dr. Silas Hsu.",
  },
  dataDesignLab: {
    href: "#",
    ...placeholderImage,
    title: "Cal Poly Data Design Lab",
    description: "Placeholder — add a description of the Cal Poly Data Design Lab.",
  },
  austinWright: {
    href: "#",
    ...placeholderImage,
    title: "Dr. Austin P. Wright",
    description: "Placeholder — add a bio for Dr. Austin P. Wright.",
  },
  hack4impact: {
    href: "#",
    ...placeholderImage,
    title: "Hack4Impact",
    description: "Placeholder — add a description of Hack4Impact.",
  },
} satisfies Record<string, PreviewCardContent>;
