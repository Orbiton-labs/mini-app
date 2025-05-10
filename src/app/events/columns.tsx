import { truncateHash } from "@/helper/format";
import { ColumnDef } from "@tanstack/react-table";

export type Account = {
  index: number;
  address: string;
  points: number;
}

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "index",
    header: "Rank",
    cell: ({ row }) => {
      const original = row.original;

      return (
        <div className="text-base">
          {original.index}
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const original = row.original;

      return (
        <div className="flex flex-col">
          <p className="text-base">{truncateHash(original.address)}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "points",
    header: "Points",
    cell: ({ row }) => {
      const original = row.original;

      return (
        <div className="flex flex-col text-center">
          <p className="text-base">{original.points} XP</p>
        </div>
      );
    },
  },
];
