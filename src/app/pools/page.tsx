"use client";

import { DataTable } from "@/app/pools/data-table";
import { ActionButton } from "@/components/ActionButton/ActionButton";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { usePoolStore } from "@/store";
import Link from "next/link";
import { useMemo } from "react";
import { columns as newColumns } from "./columns";

export default function PoolsPage() {
  const poolList = usePoolStore((state) => state.poolList);

  const data = useMemo(() => {
    if (!poolList.length) return [];

    return poolList.map((pool) => {
      return {
        token1: pool.token1.token,
        token2: pool.token2.token,
        feeTier: pool.feeTier,
        tvl: Number(pool.tvl),
        volume24h: Number(pool.volume24h),
        apr: Number(pool.apr),
        address: pool.address,
      };
    });
  }, [poolList]);

  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4">
        <PageTitle title="Pools" />
        <div className="flex flex-col gap-2 mt-4">
          <Link href="/create-pool">
            <ActionButton content="Create pool" />
          </Link>
          <DataTable columns={newColumns} data={data} />
        </div>
      </div>
    </Page>
  );
}
