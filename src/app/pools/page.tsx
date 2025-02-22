"use client";

import { InputSearch } from "@/components/InputSearch/InputSearch";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Avatar,
  AvatarStack,
  Button,
  Cell,
  Section,
} from "@telegram-apps/telegram-ui";
import { useRouter } from "next/navigation";
import { useReducer, useState } from "react";

type Token = {
  name: string;
  image: string;
};

type FeeTier = {
  fee: string;
  tickSpacing: number;
};

type Pool = {
  token1: Token;
  token2: Token;
  feeTier: FeeTier;
  tvl: number;
  volume24h: number;
  apr: number;
};

const listPools: Pool[] = [
  {
    token1: {
      name: "TON",
      image: "https://assets.dedust.io/images/ton.webp",
    },
    token2: {
      name: "DUST",
      image: "https://assets.dedust.io/images/dust.gif",
    },
    feeTier: {
      fee: "0.3%",
      tickSpacing: 100,
    },
    tvl: 764213,
    volume24h: 568560,
    apr: 278,
  },
  {
    token1: {
      name: "USDT",
      image: "https://assets.dedust.io/images/usdt.webp",
    },
    token2: {
      name: "DUST",
      image: "https://assets.dedust.io/images/dust.gif",
    },
    feeTier: {
      fee: "0.05%",
      tickSpacing: 60,
    },
    tvl: 15728,
    volume24h: 23200,
    apr: 150,
  },
];

const columnHelper = createColumnHelper<Pool>();

const columns = [
  columnHelper.accessor("token1.name", {
    id: "pool",
    header: "Pool",
    cell: (info) => {
      const row = info.row.original;
      return (
        <Cell
          before={
            <AvatarStack className="pools_avatar-stack">
              <Avatar size={28} src={row.token1.image} />
              <Avatar
                style={{
                  marginLeft: -5,
                }}
                size={28}
                src={row.token2.image}
              />
            </AvatarStack>
          }
          after
        >
          <h2>
            {row.token1.name} - {row.token2.name}
          </h2>
          <h2 className="fee_tier">{row.feeTier.fee}</h2>
        </Cell>
      );
    },
  }),
  columnHelper.accessor("tvl", {
    id: "tvl",
    header: "TVL",
    cell: (info) => <h3>{info.getValue()}</h3>,
  }),
  columnHelper.accessor("volume24h", {
    id: "volume24h",
    header: "Volume (24H)",
    cell: (info) => <h3>{info.getValue()}</h3>,
  }),
  columnHelper.accessor("apr", {
    id: "apr",
    header: "APR",
    cell: (info) => <h3>{info.getValue()}%</h3>,
  }),
];

export default function PoolsPage() {
  const [data, _setData] = useState(() => [...listPools]);
  const rerender = useReducer(() => ({}), {})[1];

  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4 gap-1">
        <Section
          className="w-[90%]"
          header={
            <PageTitle
              title="Pools"
              after={
                <Button
                  mode="filled"
                  size="s"
                  onClick={() => router.push("create-pool")}
                >
                  Create Pool
                </Button>
              }
            />
          }
        >
          <InputSearch />
          <div className=" p-2">
            <table className="flex w-full flex-col">
              <thead className="w-full">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr className="flex w-full" key={headerGroup.id}>
                    {headerGroup.headers.map((header: any) => (
                      <th
                        className="flex-1 md:first:block first:hidden"
                        key={header.id}
                      >
                        <h3>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </h3>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="flex w-full flex-col">
                {table.getRowModel().rows.map((row) => (
                  <tr
                    className="w-full md:flex grid grid-cols-3 grid-rows-2"
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td className="first:col-span-3 flex-1" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </Page>
  );
}
