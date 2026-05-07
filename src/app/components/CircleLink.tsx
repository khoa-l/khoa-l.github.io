"use client";

import Link from "next/link";
import type { FC, SVGProps } from "react";
import Circle0 from "./paths/circle-0.svg";
import Circle1 from "./paths/circle-1.svg";
import Circle2 from "./paths/circle-2.svg";
import Circle3 from "./paths/circle-3.svg";
import Circle4 from "./paths/circle-4.svg";

const handDrawnPaths: FC<SVGProps<SVGSVGElement>>[] = [
  Circle0, Circle1, Circle2, Circle3, Circle4,
];

export default function CircleLink({ href, children, rotation = -2, pathIndex = 0, color = "currentColor" }: { href: string; children: React.ReactNode; rotation?: number; pathIndex?: number; color?: string }) {
  const PathSVG = handDrawnPaths[pathIndex % handDrawnPaths.length];

  return (
    <Link href={href} className="group relative w-fit px-2 py-1 hover:italic transition-all duration-300">
      <PathSVG
        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 [&_path]:[stroke-dasharray:400] [&_path]:[stroke-dashoffset:400] group-hover:[&_path]:[stroke-dashoffset:0] [&_path]:transition-all [&_path]:duration-500"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center",
          color,
        }}
      />
      {children}
    </Link>
  );
}
