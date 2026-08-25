import Image from "next/image";

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
          <p className="flex flex-1 flex-col gap-3 border sm:gap-5">
            <span className="text-xl">Hi, I&apos;m Khoa Ly.</span>
            <span className="xs:flex hidden">
              I&apos;m a graduate researcher working at the intersections of human-computer
              interaction, explainable AI &amp; interpretable ML, and scientific computing &amp;
              visualizations.
            </span>
          </p>
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
