"use client";

import Link from "next/link";

// Hand-drawn circle path variants - paths overlap at the end like an imperfect hand-drawn circle
const handDrawnPaths = [
  "M 12,35 C 6,22 10,10 30,5 C 55,0 80,4 92,16 C 100,26 98,40 85,48 C 65,56 35,54 15,46 C 4,40 2,30 8,22 C 14,14 28,8 48,6 C 62,5 75,8 82,14",
  "M 6,25 C 4,14 18,4 38,3 C 62,1 85,8 94,20 C 100,30 95,42 80,47 C 58,54 25,52 10,42 C 2,36 3,28 8,22 C 14,16 26,10 42,7 C 56,5 70,6 80,12",
  "M 10,30 C 8,16 22,6 45,4 C 70,2 90,10 96,24 C 100,36 88,46 65,49 C 38,52 12,48 6,38 C 3,32 5,26 12,22 C 18,18 28,14 40,12",
  "M 5,22 C 8,10 25,3 50,2 C 78,1 95,12 98,28 C 100,42 82,50 55,51 C 25,52 6,44 4,32 C 3,26 6,20 14,16 C 24,10 40,6 58,6 C 72,6 84,10 90,18",
  "M 15,40 C 5,30 8,15 28,8 C 50,2 75,4 90,18 C 100,28 95,42 75,50 C 50,56 20,52 8,40 C 2,34 6,24 18,16 C 32,8 52,4 72,8 C 86,12 94,22 96,32",
];

export default function CircleLink({ href, children, rotation = -2, pathIndex = 0, color = "currentColor" }: { href: string; children: React.ReactNode; rotation?: number; pathIndex?: number; color?: string }) {
  const path = handDrawnPaths[pathIndex % handDrawnPaths.length];

  return (
    <Link href={href} className="group relative w-fit px-2 py-1 hover:italic transition-all duration-300">
      <svg
        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        viewBox="0 0 100 54"
        preserveAspectRatio="none"
      >
        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="[stroke-dasharray:400] [stroke-dashoffset:400] group-hover:[stroke-dashoffset:0] transition-all duration-500"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center",
          }}
        />
      </svg>
      {children}
    </Link>
  );
}
