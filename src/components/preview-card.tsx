import { PreviewCard as BasePreviewCard } from "@base-ui/react";
import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/src/lib/utils";

const IMAGE_WIDTH = 224;
const IMAGE_HEIGHT = 150;

export type PreviewCardContent = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
  layout?: "column" | "row";
};

type PreviewCardProps = PreviewCardContent & {
  children: ReactNode;
};

export function PreviewCard({
  href,
  children,
  imageSrc,
  imageAlt,
  title,
  description,
  layout = "column",
}: PreviewCardProps) {
  const isRow = layout === "row";
  return (
    <BasePreviewCard.Root>
      <BasePreviewCard.Trigger
        className="underline decoration-1 underline-offset-2 outline-0 focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-neutral-950 data-popup-open:decoration-neutral-950 dark:text-white dark:decoration-white/60 dark:hover:decoration-white dark:focus-visible:outline-white dark:data-popup-open:decoration-white"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </BasePreviewCard.Trigger>
      <BasePreviewCard.Portal>
        <BasePreviewCard.Positioner sideOffset={8}>
          <BasePreviewCard.Popup className="relative h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-sm bg-white text-pretty shadow-md transition-[transform,opacity] duration-100 ease-out data-ending-style:transform-[scale(0.98)] data-ending-style:opacity-0 data-starting-style:transform-[scale(0.98)] data-starting-style:opacity-0 dark:border-[1px] dark:border-white dark:bg-neutral-950 dark:text-white dark:shadow-none">
            <div
              className={cn("flex gap-2 p-2", isRow ? "flex-row items-start" : "w-min flex-col")}
            >
              <Image
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                className={cn("block max-w-none object-cover", isRow && "shrink-0")}
                src={imageSrc}
                alt={imageAlt}
              />
              <p className={cn("font-sans text-sm", isRow && "max-w-56")}>
                <span className="font-bold">{title}</span> {description}
              </p>
            </div>
          </BasePreviewCard.Popup>
        </BasePreviewCard.Positioner>
      </BasePreviewCard.Portal>
    </BasePreviewCard.Root>
  );
}
