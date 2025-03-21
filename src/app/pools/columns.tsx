import { PoolName } from "@/components/PoolName/PoolName";
import { IconArrowDown } from "@/icons/fixed/arrow-down";
import { Pool } from "@/types/Pool";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Pool>[] = [
  {
    accessorKey: "token1",
    header: "",
    cell: ({ row }) => {
      const original = row.original;

      return (
        <PoolName
          token1Img={original.token1.image}
          token2Img={original.token2.image}
          token1Name={original.token1.symbol}
          token2Name={original.token2.symbol}
          feeTier={original.feeTier}
          className="text-xs"
        />
      );
    },
  },
  {
    accessorKey: "tvl",
    header: ({ column }) => {
      return (
        <div
          className="text-left flex justify-start items-center gap-2 text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TVL
          <IconArrowDown />
        </div>
      );
    },
    cell: ({ row }) => {
      const tvl = parseFloat(row.getValue("tvl"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(tvl);

      return (
        <div className="flex flex-col">
          <p className="text-white1 text-ss">TVL</p>
          <p className="text-xs">{formatted}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "volume24h",
    header: ({ column }) => (
      <div
        className="flex justify-center items-center gap-1 text-xs"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span className="text-[9.5px]">Volume 24H</span>
        <IconArrowDown />
      </div>
    ),
    cell: ({ row }) => {
      const volume24h = parseFloat(row.getValue("volume24h"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(volume24h);

      return (
        <div className="flex flex-col text-center">
          <p className="text-white1 text-ss">Volume 24H</p>
          <p className="text-xs">{formatted}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "apr",
    header: ({ column }) => {
      return (
        <div
          className="flex justify-end items-center gap-2 text-xs"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          APR
          <IconArrowDown />
        </div>
      );
    },
    cell: ({ row }) => {
      const apr = parseFloat(row.getValue("apr"));
      return (
        <div className="flex flex-col text-right">
          <p className="text-white1 text-ss">APR</p>
          <p className="text-xs">
            {/* {apr}% */}
            99.99%
          </p>
        </div>
      );
    },
  },
];
