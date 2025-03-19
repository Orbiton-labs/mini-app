import { Skeleton } from "./skeleton";

interface CardSkeletonProps {
    className?: string;
    rows?: number;
    hasHeader?: boolean;
}

export function CardSkeleton({
    className = "",
    rows = 3,
    hasHeader = true
}: CardSkeletonProps) {
    return (
        <div className={`p-4 rounded-lg border border-solid border-grey5 bg-black3 ${className}`}>
            {hasHeader && (
                <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                        <Skeleton className="h-4 w-1/2 mb-2" />
                        <Skeleton className="h-3 w-1/3" />
                    </div>
                </div>
            )}
            <div className="space-y-3">
                {Array.from({ length: rows }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                ))}
            </div>
        </div>
    );
}

export function TableRowSkeleton({ columns = 3 }: { columns?: number }) {
    return (
        <div className="flex items-center gap-4 p-3">
            {Array.from({ length: columns }).map((_, i) => (
                <Skeleton
                    key={i}
                    className={`h-4 ${i === 0 ? 'w-1/4' : i === columns - 1 ? 'w-1/6' : 'flex-1'}`}
                />
            ))}
        </div>
    );
}

export function ListSkeleton({ rows = 5 }: { rows?: number }) {
    return (
        <div className="space-y-3">
            {Array.from({ length: rows }).map((_, i) => (
                <TableRowSkeleton key={i} />
            ))}
        </div>
    );
} 