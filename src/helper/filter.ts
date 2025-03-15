import { PositionStatus } from "@/types/Position";

export const checkPositionType = (
  liquidity: string,
  tickLower: number,
  tickUpper: number,
  currentTick: number
): PositionStatus => {
  if (liquidity === "0") {
    return PositionStatus.CLOSED;
  }

  if (currentTick >= tickLower && currentTick < tickUpper) {
    return PositionStatus.IN_RANGE;
  }

  return PositionStatus.OUT_RANGE;
};
