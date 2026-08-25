import Image from "next/image";

import { PreviewCard } from "@/components/preview-card";

export default function Home() {
  return (
    <div className="xs:bg-red-50 flex flex-1 flex-col items-center justify-center bg-white font-sans sm:bg-purple-50 md:bg-blue-50 lg:bg-green-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between gap-3 border border-blue-500 px-4 py-32 sm:items-start sm:gap-5 sm:px-16 dark:bg-black">
        <div className="relative flex w-full flex-row items-start gap-3 border border-red-500 sm:gap-5">
          <div className="relative flex aspect-3/4 min-w-30 md:aspect-square">
            <Image
              className="rounded-sm object-cover object-[-72px] md:object-[-36px]"
              src={"/profile.jpg"}
              fill={true}
              alt="Asian man with glasses and a white shirt smiling in front of a blurred background of green trees"
            ></Image>
          </div>
          <div className="flex flex-1 flex-col gap-3 border sm:gap-5">
            <h1 className="text-xl">Hi, I&apos;m Khoa Ly.</h1>
            <span className="xs:flex hidden">
              <p>
                I&apos;m a graduate researcher working at the intersections of{" "}
                <PreviewCard
                  href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"
                  imageSrc="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
                  imageAlt="Station Hofplein signage in Rotterdam, Netherlands"
                  title="Human-computer interaction"
                  description="is the study of how people interact with computers and how to design technology that is usable and useful."
                >
                  human-computer interaction
                </PreviewCard>
                ,{" "}
                <PreviewCard
                  href="https://en.wikipedia.org/wiki/Explainable_artificial_intelligence"
                  imageSrc="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
                  imageAlt="Station Hofplein signage in Rotterdam, Netherlands"
                  title="Human-computer interaction"
                  description="is the study of how people interact with computers and how to design technology that is usable and useful."
                >
                  explainable AI &amp; interpretable ML
                </PreviewCard>
                , and{" "}
                <PreviewCard
                  href="https://en.wikipedia.org/wiki/Explainable_artificial_intelligence"
                  imageSrc="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
                  imageAlt="Station Hofplein signage in Rotterdam, Netherlands"
                  title="Human-computer interaction"
                  description="is the study of how people interact with computers and how to design technology that is usable and useful."
                >
                  scientific computing &amp; visualizations
                </PreviewCard>{" "}
                .
              </p>
            </span>
          </div>
        </div>
        <p className="xs:hidden flex flex-1 border">
          I&apos;m a graduate researcher working at the intersections of human-computer interaction,
          explainable AI &amp; interpretable ML, and scientific computing &amp; visualizations.
        </p>
        <p className="flex flex-1 border">
          I currently work with Dr. Silas Hsu to study how recommender systems infringe on user
          autonomy. I am also part of the Cal Poly Data Design Lab, working with Dr. Austin P.
          Wright on a tool for studying the use of dimensionality reduction techniques in scientific
          workflows.
        </p>
        <p className="flex flex-1 border">
          I am also the volunteer executive director of the 501(c)3 non-profit organization
          Hack4Impact.
        </p>
      </main>
    </div>
  );
}
