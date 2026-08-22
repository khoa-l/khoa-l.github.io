import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        Hi, I'm Khoa Ly. I am a Computer Science Master's student at California
        Polytechnic State University, San Luis Obispo currently studying how
        recommender systems infringe on individual human autonomy and
        self-perception theory as it pertains to preference formation. My
        interests are at the intersection of human computer interaction (HCI);
        explainable artificial intelligence (XAI); and fairness, accountability,
        transparency, and ethics (FATE) research. I am also doing work in
        scientific visualization and how software can better support scientific
        workflows. I am passionate about reducing algorithmic bias and improving
        the decisions that systematically disadvantage groups and individuals. I
        endeavor to build more interpretable, trustworthy, and ethical machine
        learning and software systems. Focusing on human-centered and inclusive
        design. I currently lead the 501(c)(3) non-profit Hack4Impact. We build
        full-stack web applications for other non-profits, run educational
        programs, and work on inter-discplinary service-learning projects
        through our 13 chapters across North America. The aim is to cultivate a
        community of like-minded do-gooders in technology. On a personal note, I
        am a lover of stories! I love narratives by humans for humans across
        mediums of art, theatre, musicals, animation, books, movies, music,
        design, games, and more. Tell me your favorite stories.
      </main>
    </div>
  );
}
