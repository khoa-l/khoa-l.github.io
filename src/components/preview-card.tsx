import { PreviewCard as BasePreviewCard } from "@base-ui/react";
import Image from "next/image";
import type { ReactNode } from "react";

export type PreviewCardContent = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
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
}: PreviewCardProps) {
  return (
    <BasePreviewCard.Root>
      <BasePreviewCard.Trigger
        className="text-neutral-950 underline decoration-neutral-950/60 decoration-1 underline-offset-2 outline-0 hover:decoration-neutral-950 focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-neutral-950 data-popup-open:decoration-neutral-950 dark:text-white dark:decoration-white/60 dark:hover:decoration-white dark:focus-visible:outline-white dark:data-popup-open:decoration-white"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </BasePreviewCard.Trigger>
      <BasePreviewCard.Portal>
        <BasePreviewCard.Positioner sideOffset={8}>
          <BasePreviewCard.Popup className="relative h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-sm bg-white shadow-md transition-[transform,opacity] duration-100 ease-out data-ending-style:transform-[scale(0.98)] data-ending-style:opacity-0 data-starting-style:transform-[scale(0.98)] data-starting-style:opacity-0 dark:border-white dark:bg-neutral-950 dark:text-white dark:shadow-none">
            <div className="flex w-min flex-col gap-2 p-2">
              <Image
                width={224}
                height={150}
                className="block max-w-none"
                src={imageSrc}
                alt={imageAlt}
              />
              <p className="font-sans text-sm">
                <strong>{title}</strong> {description}
              </p>
            </div>
          </BasePreviewCard.Popup>
        </BasePreviewCard.Positioner>
      </BasePreviewCard.Portal>
    </BasePreviewCard.Root>
  );
}
