export type ChartVariant = 'default' | 'dark';

export enum Bound {
  LOWER = "LOWER",
  UPPER = "UPPER"
}

export interface ChartEntry {
  liquidity: number;
  price: number;
}

interface Dimensions {
  width: number;
  height: number;
}

interface Margins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ZoomLevels {
  initialMin: number;
  initialMax: number;
  min: number;
  max: number;
}

export interface LiquidityChartProps {
  id?: string;

  data: {
    series: ChartEntry[];
    current: number;
  };

  styles: {
    main: {
      primary: string;
      secondary: string;
    };
    area: {
      selection: string;
    };
    brush: {
      handleStroke: string;
      handleAccent: string;
      handleBg: string;
    };
    tooltip: {
      bg: string;
      primary: string;
    };
  };

  dimensions: Dimensions;
  margins: Margins;

  interactive?: boolean;

  brushLabels: (d: 'w' | 'e', x: number) => string;
  brushDomain?: [number, number];
  onBrushDomainChange: (
    domain: [number, number],
    mode: string | undefined,
  ) => void;

  zoomLevels: ZoomLevels;

  isMock?: boolean;

  isOnlyView?: boolean;
}
