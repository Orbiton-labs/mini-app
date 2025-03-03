import { useMemo } from 'react';
import { area, curveBasis, ScaleLinear } from 'd3';
import { ChartEntry } from './types';

export const Area = ({
  series,
  xScale,
  yScale,
  xValue,
  yValue,
  opacity = 0.2,
}: {
  series: ChartEntry[];
  xScale: ScaleLinear<number, number>;
  yScale: ScaleLinear<number, number>;
  xValue: (d: ChartEntry) => number;
  yValue: (d: ChartEntry) => number;
  opacity?: number;
}) =>
  useMemo(
    () => (
      <svg>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: '#07C557', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#82FA73', stopOpacity: 0.02 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          opacity={opacity}
          d={
            area()
              .curve(curveBasis)
              .x((d: unknown) => xScale(xValue(d as ChartEntry)))
              .y1((d: unknown) => yScale(yValue(d as ChartEntry)))
              .y0(yScale(0))(
              series.filter((d) => {
                const value = xScale(xValue(d));
                return value > 0 && value <= window.innerWidth;
              }) as Iterable<[number, number]>,
            ) ?? undefined
          }
        />
      </svg>
    ),
    [opacity, series, xScale, xValue, yScale, yValue],
  );
