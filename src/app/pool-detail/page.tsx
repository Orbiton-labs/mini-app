"use client";

import { SubPageTitle } from "@/components/ SubPageTitle/SubPageTitle";
import { InputSearch } from "@/components/InputSearch/InputSearch";
import { Page } from "@/components/Page";
import { PoolName } from "@/components/PoolName/PoolName";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { Select } from "@/components/ui/select";
import { IconCircleInfo } from "@/icons/fixed/circle-info";
import { TokenType } from "@/types/Token";
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";

enum PositionStatusFilter {
  ALL = "All",
  ACTIVE = "Active",
  CLOSED = "Closed",
}

const POOL = {
  token1: {
    type: TokenType.NATIVE,
    address: null,
    name: "Toncoin",
    symbol: "TON",
    image: "https://assets.dedust.io/images/ton.webp",
    decimals: 9,
    aliased: true,
    price: "3.68",
  },
  token2: {
    type: TokenType.JETTON,
    address: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    name: "Tether USD",
    symbol: "USDT",
    image: "https://assets.dedust.io/images/usdt.webp",
    decimals: 6,
    aliased: true,
    price: "0.9998",
  },
  feeTier: {
    fee: "0.3",
    tickSpacing: "60",
  },
};

export default function PoolDetailPage() {
  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4">
        <SubPageTitle title="Pool Detail" />
        <div className="grid grid-cols-2 gap-2 mt-2 ">
          <InputSearch
            onChange={(event) => {
              console.log(event);
            }}
            type="text"
            placeholder="Search by index"
            value={undefined}
          />
          <Select>
            <SelectTrigger className="bg-grey3 flex justify-between items-center p-3 text-xs rounded-lg">
              <SelectValue placeholder={PositionStatusFilter.ACTIVE} />
              <SelectIcon className="SelectIcon">
                <ChevronDownIcon />
              </SelectIcon>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={PositionStatusFilter.ALL}>All</SelectItem>
              <SelectItem value={PositionStatusFilter.ACTIVE}>
                Active
              </SelectItem>
              <SelectItem value={PositionStatusFilter.CLOSED}>CLose</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="py-4 px-3 bg-grey3 my-3 rounded-lg flex flex-col gap-3">
          <div className="pb-3 border-b-[1px] border-grey5">
            <PoolName
              token1Img={POOL.token1.image}
              token2Img={POOL.token2.image}
              token1Name={POOL.token1.symbol}
              token2Name={POOL.token2.symbol}
              feeTier={POOL.feeTier.fee}
              className="text-xs"
            />
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-ss text-white1">TVL</p>
              <p className="text-xs">$172382</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-ss text-white1">Volume 24H</p>
              <p className="text-xs">$172382</p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <p className="text-ss text-white1">Fee 24H</p>
              <p className="text-xs">$1234</p>
            </div>

            <div className="flex flex-col items-start gap-1">
              <p className="text-ss text-white1">APR</p>
              <p className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                $1234
              </p>
            </div>
          </div>
        </div>
        <SubmitButton />

        <div className="flex flex-col justify-center items-center w-full gap-2 min-h-40">
          <IconCircleInfo />
          <p className="text-base text-white2">No Position Found</p>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-ss text-white1">
              You don&apos;t have any positions for this pool
            </p>
            <p className="text-ss text-white1">Let&apos;s create one!</p>
          </div>
        </div>
      </div>
    </Page>
  );
}
