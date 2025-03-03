interface TickProcessed {
    liquidityActive: bigint;
    tickIdx: number;
    liquidityNet: bigint;
    price: string;
    price1: string;
    liquidityGross: bigint;
}

export interface GraphTick {
    tickIdx: string;
    liquidityGross: string;
    liquidityNet: string;
}

export interface TicksResult {
    ticksProcessed: TickProcessed[];
    tickSpacing: number;
    activeTickIdx: number;
    // token0: Jetton;
    // token1: Jetton;
}

export const TickMath = {
    MIN_TICK: -887272,
    MAX_TICK: 887272,
};