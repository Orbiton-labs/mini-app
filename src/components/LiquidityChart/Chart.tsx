import { max, scaleLinear, ZoomTransform } from "d3";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Area } from "./Area";
import { AxisBottom } from "./AxisBottom";
import { Brush } from "./Brush";
import { Line } from "./Line";
import { ChartEntry, LiquidityChartProps } from "./types";
import { Zoom } from "./Zoom";

const xAccessor = (d: ChartEntry) => d.price;
const yAccessor = (d: ChartEntry) => d.liquidity;

export function Chart({
  id = "liquidityChartRangeInput",
  data: { series, current },
  styles,
  dimensions: { width, height },
  margins,
  interactive = true,
  brushDomain,
  brushLabels,
  onBrushDomainChange,
  zoomLevels,
  isMock,
  isOnlyView,
}: LiquidityChartProps) {
  const zoomRef = useRef<SVGRectElement | null>(null);

  const [zoom, setZoom] = useState<ZoomTransform | null>(null);

  const [innerHeight, innerWidth] = useMemo(
    () => [height - margins.top, width - margins.left - margins.right],
    [width, height, margins]
  );

  const { xScale, yScale } = useMemo(() => {
    const scales = {
      xScale: scaleLinear()
        .domain([
          current * zoomLevels.initialMin,
          current * zoomLevels.initialMax,
        ] as number[])
        .range([0, innerWidth]),
      yScale: scaleLinear()
        .domain([0, max(series, yAccessor)] as number[])
        .range([innerHeight, innerHeight * 0.15]),
    };

    if (zoom) {
      const newXscale = zoom.rescaleX(scales.xScale);
      scales.xScale.domain(newXscale.domain());
    }

    return scales;
  }, [
    current,
    zoomLevels.initialMin,
    zoomLevels.initialMax,
    innerWidth,
    series,
    innerHeight,
    zoom,
  ]);

  const handleZoomReset = useCallback(() => {
    onBrushDomainChange(
      [current * zoomLevels.initialMin, current * zoomLevels.initialMax] as [
        number,
        number
      ],
      "reset"
    );
  }, [
    current,
    onBrushDomainChange,
    zoomLevels.initialMax,
    zoomLevels.initialMin,
  ]);

  useEffect(() => {
    // reset zoom as necessary
    handleZoomReset();
    setZoom(null);
  }, [zoomLevels]);

  useEffect(() => {
    if (!brushDomain) {
      onBrushDomainChange(xScale.domain() as [number, number], undefined);
    }
  }, [brushDomain, onBrushDomainChange, xScale]);

  const [columnHeight0, columnHeight1] = useMemo(() => {
    if (!brushDomain?.length || !series.length) return [150, 110];

    const targetData = brushDomain.map((price) => {
      const closestEntry = series.reduce((prev, curr) =>
        Math.abs(xAccessor(curr) - price) < Math.abs(xAccessor(prev) - price)
          ? curr
          : prev
      );
      return closestEntry;
    });

    const columnHeights = targetData.map((data) =>
      data ? yScale(yAccessor(data)) : 0
    );

    if ((!columnHeights[0] && !columnHeights[1]) || isMock) return [150, 110];

    if (!columnHeights[0]) return [150, innerHeight - columnHeights[1]];

    if (!columnHeights[1]) return [innerHeight - columnHeights[0], 110];

    return [innerHeight - columnHeights[0], innerHeight - columnHeights[1]];
  }, [brushDomain, series, yScale, innerHeight, isMock]);

  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        style={{ overflow: "visible" }}
      >
        <defs>
          <clipPath id={`${id}-chart-clip`}>
            <rect x="0" y="0" width={innerWidth} height={height} />
          </clipPath>

          {brushDomain && (
            // mask to highlight selected area
            <mask id={`${id}-chart-area-mask`}>
              <rect
                fill={styles.area.selection}
                x={xScale(brushDomain[0])}
                y="0"
                width={xScale(brushDomain[1]) - xScale(brushDomain[0])}
                height={innerHeight}
              />
            </mask>
          )}
        </defs>

        <g transform={`translate(${margins.left},${margins.top})`}>
          <g clipPath={`url(#${id}-chart-clip)`}>
            <Area
              opacity={isOnlyView ? 1 : 0.4}
              series={series}
              xScale={xScale}
              yScale={yScale}
              xValue={xAccessor}
              yValue={yAccessor}
            />

            {brushDomain && (
              // selected area
              <g mask={`url(#${id}-chart-area-mask)`}>
                <Area
                  series={series}
                  xScale={xScale}
                  yScale={yScale}
                  xValue={xAccessor}
                  yValue={yAccessor}
                  opacity={1}
                />
              </g>
            )}

            <Line
              color={styles.main.primary}
              value={current}
              xScale={xScale}
              innerHeight={innerHeight}
            />

            <AxisBottom
              xScale={xScale}
              innerHeight={innerHeight}
              color={styles.main.primary}
            />
          </g>

          <rect
            fill="transparent"
            cursor="grab"
            width={innerWidth}
            height={height}
            ref={zoomRef}
          />

          {isOnlyView ? null : (
            <Brush
              id={id}
              xScale={xScale}
              interactive={interactive}
              brushLabelValue={brushLabels}
              brushExtent={brushDomain ?? (xScale.domain() as [number, number])}
              innerWidth={innerWidth}
              innerHeight={innerHeight}
              setBrushExtent={onBrushDomainChange}
              westHandleHeight={columnHeight0}
              eastHandleHeight={columnHeight1}
              styles={styles}
            />
          )}
        </g>
      </svg>
      <Zoom
        svg={zoomRef.current}
        xScale={xScale}
        setZoom={setZoom}
        width={innerWidth}
        height={
          // allow zooming inside the x-axis
          height
        }
        // resetBrush={handleZoomReset}
        showResetButton
        zoomLevels={zoomLevels}
        styles={styles}
        currentPrice={current}
      />
    </>
  );
}
