import { Position, PositionFilter } from "@/types/Position";

export const getPositionList = async (poolAddress: string): Promise<Position[]> => {
    try {
        return [
            {
                id: 0,
                pool: "TON/USDT",
                tickLower: "0.95",
                tickUpper: "1.05",
                amount1: "100",
                amount2: "10",
                createdAt: "2/11",
                fee1Earned: "1.23",
                fee2Earned: "4.42",
                status: PositionFilter.ACTIVE
            },
            {
                id: 1,
                pool: "TON/USDT",
                tickLower: "0.95",
                tickUpper: "1.05",
                amount1: "1",
                amount2: "1000",
                createdAt: "2/11",
                fee1Earned: "1.23",
                fee2Earned: "4.42",
                status: PositionFilter.ACTIVE
            },
            {
                id: 2,
                pool: "TON/USDT",
                tickLower: "0.95",
                tickUpper: "1.05",
                amount1: "10",
                amount2: "13",
                createdAt: "11/12",
                fee1Earned: "1.23",
                fee2Earned: "4.42",
                status: PositionFilter.ACTIVE
            },
        ];
    } catch (error) {
        console.log(error);
        return [];
    }
}