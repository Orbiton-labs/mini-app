"use client";

import { DataTable } from "@/app/pools/data-table";
import { ActionButton } from "@/components/ActionButton/ActionButton";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { CardSkeleton, ListSkeleton } from "@/components/ui/card-skeleton";
import { usePoolList } from "@/hooks/pools/usePoolList";
import Link from "next/link";
import { useEffect } from "react";
import { columns as newColumns } from "./columns";
import { IconLoading } from "@/icons/fixed/loading";

export default function PoolsPage() {
  const { poolList, loading, refetch } = usePoolList();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4">
        <PageTitle title="Pools" />
        <div className="flex flex-col gap-2 mt-4">
          <Link href="/create-pool">
            <ActionButton content="Create pool" />
          </Link>
          {/* {loading ? (
            <div className="mt-4 flex justify-center items-center">
              <IconLoading className="w-10 h-10" />
            </div>
          ) : ( */}
            <DataTable columns={newColumns} data={poolList} />
          {/* )} */}
        </div>
      </div>
    </Page>
  );
}
