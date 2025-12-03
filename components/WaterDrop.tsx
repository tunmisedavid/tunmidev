"use client";

import React, { JSX } from "react";
import { animate, stagger } from "animejs";
import { useMediaQuery } from "@chakra-ui/react";

const WaterDropGrid: React.FC = () => {
  return (
    <div className="relative grid place-content-center ">
      <DotGrid />
    </div>
  );
};

const DotGrid: React.FC = () => {
  const [mobile, lg] = useMediaQuery([
    "(max-width: 480px)",
    // "(min-width: 768px)",
    "(max-width: 1024px)",
  ]);

  // const GRID_WIDTH = mobile ? 15 : lg ? 25 : 25;
  const GRID_WIDTH = mobile ? 15 : lg ? 20 : 25;
  // const GRID_HEIGHT = mobile ? 15 : lg?20: 20;
  const GRID_HEIGHT = mobile ? 10 : lg ? 15 : 20;

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    const indexAttr = target.dataset.index;
    if (!indexAttr) return;

    const index = Number(indexAttr);
    if (isNaN(index)) return;

    animate(".dot-point", {
      scale: [
        { to: 1.35, easing: "easeOutSine", duration: 250 },
        { to: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { to: -15, easing: "easeOutSine", duration: 250 },
        { to: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { to: 1, easing: "easeOutSine", duration: 250 },
        { to: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: index,
      }),
    });
  };

  const dots: JSX.Element[] = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          data-index={index}
          className="group cursor-crosshair rounded-full p-[6px] xl:p-2 transition-colors hover:bg-[#4cc9f0] "
        >
          <div
            data-index={index}
            className="dot-point h-1 xl:h-2 w-1 xl:w-2 rounded-full bg-slate-400  "
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit  "
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
