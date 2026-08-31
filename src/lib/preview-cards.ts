import type { PreviewCardContent } from "@/src/components/preview-card";

const placeholderImage = {
  imageSrc: "https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300",
  imageAlt: "Station Hofplein signage in Rotterdam, Netherlands",
};

export const previewCards = {
  humanComputerInteraction: {
    href: "https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction",
    imageAlt: "A person sitting at retro computer interface",
    imageSrc: "/hci.jpg",
    title: "Human-computer interaction",
    description:
      "is the study of how people interact with computers and how to design technology that is usable and useful.",
  },
  explainableAi: {
    href: "https://en.wikipedia.org/wiki/Explainable_artificial_intelligence",
    imageAlt: "A render of a graph network with points labeled X, Y, 1, or 2",
    imageSrc: "/xai.jpg",
    title: "Explainable AI & interpretable ML",
    description:
      "is a set of methods and techniques that make the outputs of machine learning models understandable to humans.",
  },
  scientificComputing: {
    href: "https://en.wikipedia.org/wiki/Computational_science",
    imageAlt: "A digital grid of smaller grids of many colorful lit squares",
    imageSrc: "/sci.jpg",
    title: "Scientific computing & visualizations",
    description:
      "combines numerical methods, algorithms, and visualization to solve and communicate complex scientific problems.",
  },
  silasHsu: {
    href: "https://smhsu.github.io/",
    imageSrc: "/silas.webp",
    imageAlt: "Asian man in zipped -up black jacket with a white grid and glasses",
    title: "Dr. Silas Hsu",
    description:
      "is an Assistant Professor of CS at Cal Poly SLO. He researches the erosion of user autonomy in AI content curation systems / AI feedback systems in education and its remedies.",
  },
  dataDesignLab: {
    href: "https://calpoly-data-design-lab.github.io/",
    imageAlt:
      "The logo for the Cal Poly Data Design Lab; algorithms stylized letter D in a container shape",
    imageSrc: "/cpddl.jpg",
    title: "Cal Poly Data Design Lab",
    description:
      "studies how people make sense of data and build tools that help communities, researchers, and practitioners analyze, visualize, and communicate with data.",
  },
  austinWright: {
    href: "https://austinpwright.com/",
    imageSrc: "/austin.jpg",
    imageAlt: "Caucasian man with long brown hair in a top bun and glasses smiling",
    title: "Dr. Austin P. Wright",
    description:
      "is an Assistant Professor of CS at Cal Poly SLO. He runs the Cal Poly Data Design Lab and conducts research in Scientific Human-Centered Machine Learning.",
  },
  hack4impact: {
    href: "https://www.hack4impact.org/",
    imageAlt:
      "The logo for Hack4Impact; a globe in between angle brackets next to the name Hack4Impact",
    imageSrc: "/h4i.jpg",
    title: "Hack4Impact",
    description:
      "chapters create software for non-profits, educate students about social good technology, and aims to foster communities of humanitarians in tech.",
  },
} satisfies Record<string, PreviewCardContent>;
