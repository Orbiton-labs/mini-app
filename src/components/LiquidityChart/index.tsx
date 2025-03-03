import { ReactNode, useCallback, useMemo } from "react";

import { formatDelta } from "@/lib/formatDelta";
import { Spinner } from "@telegram-apps/telegram-ui";
import { Chart } from "./Chart";
import { Bound, ChartEntry, ChartVariant, ZoomLevels } from "./types";

const ZOOM_LEVELS: ZoomLevels = {
  initialMin: 0.9,
  initialMax: 1.1,
  min: 0.00001,
  max: 20,
};

const data: ChartEntry[] = [
  { price: 0.0, liquidity: 0 },
  { price: 0.02, liquidity: 8400000 },
  { price: 0.04, liquidity: 16800000 },
  { price: 0.06, liquidity: 25200000 },
  { price: 0.08, liquidity: 33600000 },
  { price: 0.1, liquidity: 42000000 },
  { price: 0.12, liquidity: 41400000 },
  { price: 0.14, liquidity: 40800000 },
  { price: 0.16, liquidity: 40200000 },
  { price: 0.18, liquidity: 39600000 },
  { price: 0.2, liquidity: 39000000 },
  { price: 0.22, liquidity: 39600000 },
  { price: 0.24, liquidity: 40200000 },
  { price: 0.26, liquidity: 40800000 },
  { price: 0.28, liquidity: 41400000 },
  { price: 0.3, liquidity: 41000000 },
  { price: 0.32, liquidity: 41500000 },
  { price: 0.34, liquidity: 42000000 },
  { price: 0.36, liquidity: 42500000 },
  { price: 0.38, liquidity: 43000000 },
  { price: 0.4, liquidity: 43500000 },
  { price: 0.42, liquidity: 42650000 },
  { price: 0.44, liquidity: 41800000 },
  { price: 0.46, liquidity: 40950000 },
  { price: 0.48, liquidity: 40100000 },
  { price: 0.5, liquidity: 39800000 },
  { price: 0.52, liquidity: 40440000 },
  { price: 0.54, liquidity: 41080000 },
  { price: 0.56, liquidity: 41720000 },
  { price: 0.58, liquidity: 42360000 },
  { price: 0.6, liquidity: 44000000 },
  { price: 0.62, liquidity: 44400000 },
  { price: 0.64, liquidity: 44800000 },
  { price: 0.66, liquidity: 45200000 },
  { price: 0.68, liquidity: 45600000 },
  { price: 0.7, liquidity: 46000000 },
  { price: 0.72, liquidity: 46250000 },
  { price: 0.74, liquidity: 46500000 },
  { price: 0.76, liquidity: 46750000 },
  { price: 0.78, liquidity: 47000000 },
  { price: 0.8, liquidity: 47000000 },
  { price: 0.82, liquidity: 47400000 },
  { price: 0.84, liquidity: 47800000 },
  { price: 0.86, liquidity: 48200000 },
  { price: 0.88, liquidity: 48600000 },
  { price: 0.9, liquidity: 49000000 },
  { price: 0.92, liquidity: 48900000 },
  { price: 0.94, liquidity: 48800000 },
  { price: 0.96, liquidity: 78700000 },
  { price: 0.98, liquidity: 98600000 },
  { price: 1.0, liquidity: 48500000 },
  { price: 1.02, liquidity: 48200000 },
  { price: 1.04, liquidity: 47900000 },
  { price: 1.06, liquidity: 47600000 },
  { price: 1.08, liquidity: 47300000 },
  { price: 1.1, liquidity: 47000000 },
  { price: 1.12, liquidity: 46750000 },
  { price: 1.14, liquidity: 46500000 },
  { price: 1.16, liquidity: 46250000 },
  { price: 1.18, liquidity: 46000000 },
  { price: 1.2, liquidity: 45500000 },
  { price: 1.22, liquidity: 45000000 },
  { price: 1.24, liquidity: 44500000 },
  { price: 1.26, liquidity: 44000000 },
  { price: 1.28, liquidity: 43500000 },
  { price: 1.3, liquidity: 43000000 },
  { price: 1.32, liquidity: 42800000 },
  { price: 1.34, liquidity: 42600000 },
  { price: 1.36, liquidity: 42400000 },
  { price: 1.38, liquidity: 42200000 },
  { price: 1.4, liquidity: 42000000 },
  { price: 1.42, liquidity: 41500000 },
  { price: 1.44, liquidity: 41000000 },
  { price: 1.46, liquidity: 40500000 },
  { price: 1.48, liquidity: 40000000 },
  { price: 1.5, liquidity: 40000000 },
  { price: 1.52, liquidity: 39500000 },
  { price: 1.54, liquidity: 39000000 },
  { price: 1.56, liquidity: 38500000 },
  { price: 1.58, liquidity: 38000000 },
  { price: 1.6, liquidity: 39000000 },
  { price: 1.62, liquidity: 38600000 },
  { price: 1.64, liquidity: 38200000 },
  { price: 1.66, liquidity: 37800000 },
  { price: 1.68, liquidity: 37400000 },
  { price: 1.7, liquidity: 38000000 },
  { price: 1.72, liquidity: 37875000 },
  { price: 1.74, liquidity: 37750000 },
  { price: 1.76, liquidity: 37625000 },
  { price: 1.78, liquidity: 37500000 },
  { price: 1.8, liquidity: 37500000 },
  { price: 1.82, liquidity: 37375000 },
  { price: 1.84, liquidity: 37250000 },
  { price: 1.86, liquidity: 37125000 },
  { price: 1.88, liquidity: 37000000 },
  { price: 1.9, liquidity: 37000000 },
  { price: 1.92, liquidity: 36600000 },
  { price: 1.94, liquidity: 36200000 },
  { price: 1.96, liquidity: 35800000 },
  { price: 1.98, liquidity: 35400000 },
  { price: 2.0, liquidity: 36000000 },
];

function InfoBox({ message, icon }: { message?: ReactNode; icon: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center justify-center text-black">
      {icon}
      {message && <div className="p-10 text-center">{message}</div>}
    </div>
  );
}

export default function LiquidityChartRangeInput({
  pool,
  ticksAtLimit,
  price,
  priceLower,
  priceUpper,
  onLeftRangeInput,
  onRightRangeInput,
  interactive = true,
  variant = "dark",
  isOnlyView = false,
  width = 360,
  height = 230,
  isSorted = true,
}: {
  pool: any | null | undefined;
  ticksAtLimit: { [bound in Bound]?: boolean | undefined };
  price?: number;
  priceLower?: number;
  priceUpper?: number;
  onLeftRangeInput: (typedValue: string) => void;
  onRightRangeInput: (typedValue: string) => void;
  interactive?: boolean;
  variant?: ChartVariant;
  isOnlyView?: boolean;
  width?: number;
  height?: number;
  isSorted?: boolean;
}) {
  const isChartLoading = false;
  const formattedData = data;

  const onBrushDomainChangeEnded = useCallback(
    (domain: [number, number], mode: string | undefined) => {
      let leftRangeValue = Number(domain[0]);
      let rightRangeValue = Number(domain[1]);

      if (leftRangeValue <= 0) {
        leftRangeValue = 1 / 10 ** 6;
      }

      // invert price
      if (!isSorted) {
        leftRangeValue /= leftRangeValue ** 2;
        rightRangeValue /= rightRangeValue ** 2;
      }

      // simulate user input for auto-formatting and other validations
      if (
        (!ticksAtLimit[isSorted ? Bound.LOWER : Bound.UPPER] ||
          mode === "handle" ||
          mode === "reset") &&
        leftRangeValue > 0
      ) {
        onLeftRangeInput(leftRangeValue.toFixed(12));
      }

      if (
        (!ticksAtLimit[isSorted ? Bound.UPPER : Bound.LOWER] ||
          mode === "reset") &&
        rightRangeValue > 0
      ) {
        // todo: remove this check. Upper bound for large numbers
        // sometimes fails to parse to tick.
        // if (rightRangeValue < 1e35) {
        onRightRangeInput(rightRangeValue.toFixed(12));
        // }
      }
    },
    [isSorted, onLeftRangeInput, onRightRangeInput, ticksAtLimit]
  );

  const brushDomain: [number, number] | undefined = useMemo(() => {
    const lowPrice = isSorted ? priceLower : priceUpper;
    const highPrice = isSorted ? priceUpper : priceLower;
    return lowPrice && highPrice ? [lowPrice, highPrice] : undefined;
  }, [priceLower, priceUpper, isSorted]);

  const brushLabelValue = useCallback(
    (d: "w" | "e", x: number) => {
      if (!price) return "";

      if (d === "w" && ticksAtLimit[isSorted ? Bound.LOWER : Bound.UPPER])
        return "0";
      if (d === "e" && ticksAtLimit[isSorted ? Bound.UPPER : Bound.LOWER])
        return "∞";

      const percent =
        (x < price ? -1 : 1) *
        ((Math.max(x, price) - Math.min(x, price)) / price) *
        100;

      return price
        ? `${(Math.sign(percent) < 0 ? "-" : "+") + formatDelta(percent)}`
        : "";
    },
    [isSorted, price, ticksAtLimit]
  );

  const mockData = useMemo(() => {
    if (!formattedData?.length && price)
      return [
        { liquidity: 0, price: price * ZOOM_LEVELS.initialMin },
        { liquidity: 0, price: price * ZOOM_LEVELS.initialMax },
      ];

    return [];
  }, [formattedData, price]);

  const mockPrice = useMemo(() => {
    if (!formattedData?.length && price) return price;

    return 0;
  }, [formattedData, price]);

  return (
    <div className="relative mb-10 flex" style={{ minHeight: "200px" }}>
      {isChartLoading ? (
        <InfoBox icon={<Spinner size="l" />} />
      ) : (
        <Chart
          data={{
            series: formattedData?.length && price ? formattedData : mockData,
            current: formattedData?.length && price ? price : mockPrice,
          }}
          dimensions={{ width, height }}
          margins={{ top: 50, right: 2, bottom: 20, left: 0 }}
          styles={{
            main: {
              primary: variant === "dark" ? "#FBFCF4" : "#FBFCF4",
              secondary: variant === "dark" ? "#2B2B2B" : "#EAECE8",
            },
            area: {
              selection: "#5bc7b3",
            },
            brush: {
              handleStroke: variant === "dark" ? "#FBFCF4" : "#FBFCF4",
              handleAccent: variant === "dark" ? "E0E8DD" : "#121212",
              handleBg: variant === "dark" ? "#C0DF42" : "#C0DF42",
            },
            tooltip: {
              primary: variant === "dark" ? "#2B2B2B" : "#FFFFFF",
              bg: variant === "dark" ? "#E0E8DD" : "#2B2B2B",
            },
          }}
          interactive={interactive}
          brushLabels={brushLabelValue}
          brushDomain={brushDomain}
          onBrushDomainChange={onBrushDomainChangeEnded}
          zoomLevels={ZOOM_LEVELS}
          isMock={!formattedData?.length || !price}
          isOnlyView={isOnlyView}
        />
      )}
    </div>
  );
}
