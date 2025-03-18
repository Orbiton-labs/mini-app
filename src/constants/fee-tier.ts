import { FeeTier } from "@/types/FeeTier";

export const FEE_TIERS: FeeTier[] = [
    {
        fee: "0.01",
        tickSpacing: "1",
        useWhen: "Best for stable pair",
    },
    {
        fee: "0.05",
        tickSpacing: "10",
        useWhen: "Best for stable pair",
    },
    {
        fee: "0.3",
        tickSpacing: "60",
        useWhen: "Best for most pair",
    },
    {
        fee: "1",
        tickSpacing: "200",
        useWhen: "Best for exotic pairs",
    },
];