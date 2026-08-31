import { PreviewCard } from "@/src/components/preview-card";
import { TiltImage } from "@/src/components/tilt-image";
import { previewCards } from "@/src/lib/preview-cards";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center font-sans text-pretty">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between gap-3 px-4 py-32 sm:items-start sm:gap-5 sm:px-16">
        <div className="relative flex w-full flex-row items-start gap-3 sm:gap-5">
          <TiltImage
            className="relative flex aspect-3/4 min-w-30 md:aspect-square"
            src="/profile.jpg"
            alt="Asian man with glasses and a white shirt smiling in front of a blurred background of green trees"
          />
          <div className="flex flex-1 flex-col gap-3 sm:gap-5">
            <h1 className="align-bottom text-xl">Hi, I&apos;m Khoa Ly.</h1>
            <span className="xs:flex hidden">
              <p>
                I&apos;m a graduate researcher working at the intersections of{" "}
                <PreviewCard {...previewCards.humanComputerInteraction}>
                  human-computer interaction
                </PreviewCard>
                ,{" "}
                <PreviewCard {...previewCards.explainableAi}>
                  explainable AI &amp; interpretable ML
                </PreviewCard>
                , and{" "}
                <PreviewCard {...previewCards.scientificComputing}>
                  scientific computing &amp; visualizations
                </PreviewCard>
                .
              </p>
            </span>
          </div>
        </div>
        <p className="xs:hidden flex flex-1">
          I&apos;m a graduate researcher working at the intersections of human-computer interaction,
          explainable AI &amp; interpretable ML, and scientific computing &amp; visualizations.
        </p>
        <p className="flex-1">
          I currently work with <PreviewCard {...previewCards.silasHsu}>Dr. Silas Hsu</PreviewCard>{" "}
          studying how recommender systems infringe on user autonomy. I am part of the{" "}
          <PreviewCard {...previewCards.dataDesignLab}>Cal Poly Data Design Lab</PreviewCard>,
          working with{" "}
          <PreviewCard {...previewCards.austinWright}>Dr. Austin P. Wright</PreviewCard> on a tool
          for studying the use of dimensionality reduction techniques in scientific workflows.
        </p>
        <p className="flex-1">
          I am also the volunteer executive director of the 501(c)3 non-profit organization{" "}
          <PreviewCard {...previewCards.hack4impact}>Hack4Impact</PreviewCard>.
        </p>
      </main>
    </div>
  );
}
