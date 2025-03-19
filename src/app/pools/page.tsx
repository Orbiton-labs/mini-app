"use client";

import { DataTable } from "@/app/pools/data-table";
import { ActionButton } from "@/components/ActionButton/ActionButton";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { CardSkeleton, ListSkeleton } from "@/components/ui/card-skeleton";
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
          {loading ? (
            <div className="mt-4 space-y-4">
              <CardSkeleton hasHeader={false} rows={1} />
              <ListSkeleton rows={5} />
            </div>
          ) : (
            <DataTable columns={newColumns} data={poolList} />
          )}
        </div>
      </div>
    </Page>
  );
}
