"use client";

import { DataTable } from "@/app/pools/data-table";
import { ActionButton } from "@/components/ActionButton/ActionButton";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { columns as newColumns } from "./columns";

const listPools = [
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
      fee: "0.3",
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
      fee: "0.05",
      tickSpacing: 60,
    },
    tvl: 15728,
    volume24h: 23200,
    apr: 150,
  },
];

export default function PoolsPage() {
  // const router = useRouter();

  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4 mb-32">
        <PageTitle title="Pools" />
        <div className="flex flex-col gap-2 mt-4">
          <Link href="/create-pool">
            <ActionButton
              content="Create pool"
            />
          </Link>
          <DataTable columns={newColumns} data={listPools} />
        </div>
      </div>
    </Page>
  );
}
