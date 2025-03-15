"use client";

import { DataTable } from "@/app/pools/data-table";
import { ActionButton } from "@/components/ActionButton/ActionButton";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { usePoolList } from "@/hooks/pools/usePoolList";
import Link from "next/link";
import { columns as newColumns } from "./columns";

export default function PoolsPage() {
  const { poolList, loading } = usePoolList();

  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4">
        <PageTitle title="Pools" />
        <div className="flex flex-col gap-2 mt-4">
          <Link href="/create-pool">
            <ActionButton content="Create pool" />
          </Link>
          <DataTable columns={newColumns} data={poolList} />
        </div>
      </div>
    </Page>
  );
}
