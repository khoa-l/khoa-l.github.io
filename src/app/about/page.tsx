import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <h1 className="text-7xl font-normal mb-8">About</h1>
      <div
        className="max-w-2xl space-y-4"
        style={{ fontFamily: "var(--font-inclusive-sans)" }}
      >
        <p>
          I am a Computer Science Master's student at California Polytechnic
          State University, San Luis Obispo currently studying how recommender
          systems infringe on individual human autonomy and self-perception
          theory as it pertains to preference formation.
        </p>
        <p>
          My interests are at the intersection of human computer interaction
          (HCI); explainable artificial intelligence (XAI); and fairness,
          accountability, transparency, and ethics (FATE) research.
        </p>
        <p>
          I am passionate about reducing algorithmic bias and improving the
          decisions that systematically disadvantage groups and individuals. I
          endeavor to build more interpretable, trustworthy, and ethical machine
          learning and software systems. Focusing on human-centered and
          inclusive design.
        </p>
        <p>
          I currently lead the 501(c)(3) non-profit Hack for Impact. We build
          full-stack web applications for other non-profits, run educational
          programs, and work on inter-discplinary service-learning projects
          through our 13 chapters across North America. The aim is to cultivate
          a community of like-minded do-gooders in technology.
        </p>
        <p>
          On a personal note, I am a lover of stories! I love narratives by
          humans for humans across mediums of art, theatre, musicals, animation,
          books, movies, music, design, games, and more. Tell me your favorite
          stories.
        </p>
      </div>
    </PageLayout>
  );
}
