"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties, type MouseEvent } from "react";

const MAX_TILT_DEG = 20;
const PERSPECTIVE = "400px";
const RESET_TRANSFORM = `perspective(${PERSPECTIVE}) rotateX(0deg) rotateY(0deg)`;

type TiltImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function TiltImage({ src, alt, className }: TiltImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(RESET_TRANSFORM);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    setTransform(
      `perspective(${PERSPECTIVE}) rotateX(${(-py * MAX_TILT_DEG).toFixed(2)}deg) rotateY(${(px * MAX_TILT_DEG).toFixed(2)}deg)`,
    );
  }

  const style: CSSProperties = {
    transform,
    transition: "transform 150ms ease-out",
    transformStyle: "preserve-3d",
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransform(RESET_TRANSFORM)}
      className={className}
      style={style}
    >
      <Image
        className="rounded-sm object-cover object-[-72px] shadow-md md:object-[-36px]"
        loading="eager"
        src={src}
        fill
        alt={alt}
      />
    </div>
  );
}
