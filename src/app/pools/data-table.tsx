"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import React from "react";
import { InputSearch } from "../../components/InputSearch/InputSearch";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex flex-col gap-2 items-center pb-4">
        <InputSearch
          type="text"
          placeholder="Search name or address"
          value={(table.getColumn("token1")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("token1")?.setFilterValue(event.target.value)
          }
        />
      </div>
      <div className="rounded-md">
        <Table className="flex w-full flex-col">
          <TableHeader className="w-full">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                className="flex w-full border-none"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="flex-1 md:first:block first:hidden border-none"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="flex w-full flex-col gap-2">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => {
                return (
                  <TableRow
                    style={{
                      borderWidth: '1px'
                    }}
                    className="last:mb-40 w-full md:flex grid grid-cols-3 grid-rows-2 bg-grey3 rounded-lg py-4 px-3 border-grey7 hover:cursor-pointer"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() =>
                      router.push(
                        `/pool-detail?sel-pool=${(row.original as any).address}`
                      )
                    }
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        className="first:col-span-3 flex-1 first:items-start first:flex"
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
