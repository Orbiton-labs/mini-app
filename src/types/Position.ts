
export enum PositionFilter {
    ALL = "All",
    ACTIVE = "Active",
    CLOSED = "Closed"
}

export type Position = {
    id: number;
    pool: string;
    amount1: string;
    amount2: string;
    fee1Earned: string;
    fee2Earned: string;
    tickLower: string;
    tickUpper: string;
    status: PositionFilter;
    createdAt: string;
}