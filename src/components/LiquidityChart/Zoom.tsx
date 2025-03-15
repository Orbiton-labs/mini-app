import {
  ScaleLinear,
  select,
  zoom,
  ZoomBehavior,
  zoomIdentity,
  ZoomTransform,
} from "d3";
import { Minus, Plus, RefreshCcw } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";
import { ButtonProps } from "../Button";
import { LiquidityChartProps, ZoomLevels } from "./types";

export const Presets = {
  SAFE: "SAFE",
  RISK: "RISK",
  NORMAL: "NORMAL",
  FULL: "FULL",
  STABLE: "STABLE",
};

function ZoomButton({ onClick, className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type={"button"}
      onClick={onClick}
      className={cn("h-5 w-5 p-0 duration-200", className)}
    >
      {children}
    </button>
  );
}

export function Zoom({
  svg,
  xScale,
  setZoom,
  width,
  height,
  // resetBrush,
  showResetButton = true,
  zoomLevels,
  styles,
  currentPrice,
}: {
  svg: SVGRectElement | null;
  xScale: ScaleLinear<number, number>;
  setZoom: (transform: ZoomTransform) => void;
  width: number;
  height: number;
  // resetBrush: () => void;
  showResetButton: boolean;
  zoomLevels: ZoomLevels;
  styles: LiquidityChartProps["styles"];
  currentPrice: number;
}) {
  const zoomBehavior = useRef<ZoomBehavior<Element, unknown>>();
  const preset = Presets.NORMAL;

  const [zoomIn, zoomOut, zoomInitial] = useMemo(
    () => [
      () => {
        console.log(svg);
        return (
          svg &&
          zoomBehavior.current &&
          select(svg as Element)
            .transition()
            .call(zoomBehavior.current.scaleBy, 2)
        );
      },
      () =>
        svg &&
        zoomBehavior.current &&
        select(svg as Element)
          .transition()
          .call(zoomBehavior.current.scaleBy, 0.5),
      () =>
        svg &&
        zoomBehavior.current &&
        select(svg as Element)
          .transition()
          .call(zoomBehavior.current.scaleTo, 0.5),
    ],
    [svg]
  );

  useEffect(() => {
    if (!svg) return;
    zoomBehavior.current = zoom()
      .scaleExtent([zoomLevels.min, zoomLevels.max])
      .extent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", ({ transform }: { transform: ZoomTransform }) =>
        setZoom(transform)
      );

    select(svg as Element).call(zoomBehavior.current);
  }, [
    height,
    width,
    setZoom,
    svg,
    xScale,
    zoomBehavior,
    zoomLevels,
    zoomLevels.max,
    zoomLevels.min,
  ]);

  const handleZoomToPreset = useCallback(() => {
    if (!svg || !zoomBehavior.current) return;
    let scaleByPreset;

    switch (preset) {
      case Presets.FULL:
        scaleByPreset = 0.01;
        break;
      case Presets.SAFE:
        scaleByPreset = 0.1;
        break;
      case Presets.NORMAL:
        scaleByPreset = 0.25;
        break;
      case Presets.RISK:
        scaleByPreset = 0.5;
        break;
      default:
        scaleByPreset = 1;
    }

    const translateX =
      preset === Presets.FULL
        ? width / 10 - xScale(currentPrice) * scaleByPreset
        : width / 2 - xScale(currentPrice) * scaleByPreset;

    const newTransform = zoomIdentity
      .translate(translateX, 0)
      .scale(scaleByPreset);

    setZoom(newTransform);

    select(svg as Element)
      .transition()
      .duration(500)
      .call(zoomBehavior.current.transform, newTransform);
  }, [zoomLevels.min, zoomLevels.max, svg, setZoom, currentPrice, width]);

  useEffect(() => {
    console.log("zoom preset", preset);
    handleZoomToPreset();
  }, [handleZoomToPreset]);

  useEffect(() => {
    // reset zoom to initial on zoomLevel change
    zoomInitial();
  }, [zoomInitial, zoomLevels]);

  return (
    <div className="absolute right-2 top-0 flex w-fit animate-fade-in gap-2 transition-all duration-200 group-hover:visible">
      <ZoomButton
        className={`flex items-center justify-center rounded-full text-[${styles.main.primary}] bg-[${styles.main.secondary}] hover:bg-[${styles.main.primary}] hover:text-[${styles.main.secondary}]`}
        onClick={zoomIn}
      >
        <Plus />
      </ZoomButton>
      <ZoomButton
        className={`flex items-center justify-center rounded-full text-[${styles.main.primary}] bg-[${styles.main.secondary}] hover:bg-[${styles.main.primary}] hover:text-[${styles.main.secondary}]`}
        onClick={zoomOut}
      >
        <Minus />
      </ZoomButton>
      {showResetButton && (
        <ZoomButton
          className={`hover:text-none flex items-center justify-center border-none bg-transparent hover:bg-transparent text-[${styles.main.primary}]`}
          onClick={() => {
            handleZoomToPreset();
          }}
        >
          <RefreshCcw />
        </ZoomButton>
      )}
    </div>
  );
}
