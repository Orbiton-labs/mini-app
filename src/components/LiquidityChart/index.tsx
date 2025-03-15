import { ReactNode, useCallback, useMemo } from "react";

import { IconLoading } from "@/icons/fixed/loading";
import { formatDelta } from "@/lib/formatDelta";
import { Pool } from "@/types/Pool";
import { Jetton, Price } from "@orbiton_labs/v3-contracts-sdk";
import { Chart } from "./Chart";
import { useDensityChartData } from "./hooks";
import { Bound, ChartVariant, ZoomLevels } from "./types";

const ZOOM_LEVELS: ZoomLevels = {
  initialMin: 0.9,
  initialMax: 1.1,
  min: 0.00001,
  max: 20,
};

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
  poolAddr,
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
  pool: Pool | null | undefined;
  poolAddr: string;
  ticksAtLimit: { [bound in Bound]?: boolean | undefined };
  price?: number;
  priceLower?: Price<Jetton, Jetton>;
  priceUpper?: Price<Jetton, Jetton>;
  onLeftRangeInput: (typedValue: string) => void;
  onRightRangeInput: (typedValue: string) => void;
  interactive?: boolean;
  variant?: ChartVariant;
  isOnlyView?: boolean;
  width?: number;
  height?: number;
  isSorted?: boolean;
}) {
  const { isLoading: isChartLoading, formattedData } = useDensityChartData({
    poolAddr,
    pool,
    isSorted,
  });

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
    const lowPrice = isSorted
      ? priceLower?.toSignificant(6)
      : priceUpper?.invert().toSignificant(6);
    const highPrice = isSorted
      ? priceUpper?.toSignificant(6)
      : priceLower?.invert()?.toSignificant(6);
    return lowPrice && highPrice
      ? [parseFloat(lowPrice), parseFloat(highPrice)]
      : undefined;
  }, [priceLower, priceUpper, isSorted]);

  // calculate percentage
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
      {/* {isChartLoading ? (
        <InfoBox icon={<Spinner size="l" />} />
      ) : ( */}
      {isChartLoading && (
        <div className="absolute w-full h-[110%] flex items-center justify-center bg-black3 z-10">
          <IconLoading />
        </div>
      )}
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
      {/* )} */}
    </div>
  );
}
