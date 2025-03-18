"use client";

import { InputSearch } from "@/components/InputSearch/InputSearch";
import { Page } from "@/components/Page";
import { PoolName } from "@/components/PoolName/PoolName";
import { StatusFilter } from "@/components/StatusFilter/StatusFilter";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { SubPageTitle } from "@/components/SubPageTitle/SubPageTitle";
import { PositionFilter } from "@/constants/position";
import { usePoolDetail } from "@/hooks/pool-detail/usePoolDetail";
import { IconCircleInfo } from "@/icons/fixed/circle-info";
import { Avatar } from "@telegram-apps/telegram-ui";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import positionImg from "../../app/_assets/position.png";

export default function PoolDetailPage() {
  const searchParams = useSearchParams();
  const poolAddress = searchParams.get("sel-pool");

  const {
    poolDetail,
    poolDetailLoading,
    positionList,
    positionListLoading,
    total,
  } = usePoolDetail(poolAddress || "");

  const [status, setStatus] = useState<string>(PositionFilter.ACTIVE);

  return (
    <Page>
      {poolDetail ? (
        <div className="flex flex-col pl-4 pr-4">
          <SubPageTitle title="Pool Detail" />
          <div className="grid grid-cols-2 gap-2 mt-2 ">
            <InputSearch
              onChange={(event) => {
                console.log(event);
              }}
              type="text"
              placeholder="Search"
              value={undefined}
            />
            <StatusFilter
              displayStatusList={() => { }}
              selectedStatus={status}
              setStatus={(status) => setStatus(status)}
              statusFilterList={[
                PositionFilter.ALL,
                PositionFilter.ACTIVE,
                PositionFilter.CLOSED,
              ]}
            />
          </div>

          <div className="py-4 px-3 bg-grey3 my-3 rounded-lg flex flex-col gap-3">
            <div className="pb-3 border-b-[1px] border-grey5">
              <PoolName
                token1Img={poolDetail.token1.image}
                token2Img={poolDetail.token2.image}
                token1Name={poolDetail.token1.symbol}
                token2Name={poolDetail.token2.symbol}
                feeTier={poolDetail.feeTier}
                className="text-xs"
              />
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-ss text-white1">TVL</p>
                <p className="text-xs">${poolDetail.tvl.toFixed(2)}</p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <p className="text-ss text-white1">Volume 24H</p>
                <p className="text-xs">${poolDetail.volume24h.toFixed(2)}</p>
              </div>

              <div className="flex flex-col items-end gap-1">
                <p className="text-ss text-white1">Fee 24H</p>
                <p className="text-xs">$0</p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <p className="text-ss text-white1">APR</p>
                <p className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                  {poolDetail.apr}%
                </p>
              </div>
            </div>
          </div>

          {total && (
            <div className="w-full grid grid-cols-3 bg-grey6 rounded-lg p-3 gap-3 mb-2">
              <div className="flex flex-col gap-1">
                <p className="text-ss text-white1">Positions</p>
                <p className="text-xs">{total.numOfPos}</p>
              </div>
              <div className="flex flex-col items-center gap-1 ">
                <p className="text-ss text-white1">TVL</p>
                <p className="text-xs">${total.tvl}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-ss text-white1 ">Total Fee 24H</p>
                <p className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                  ${total.fee24h}
                </p>
              </div>
            </div>
          )}

          <Link href={`/add-liquidity?pool=${poolAddress}`}>
            <SubmitButton content="Create Position" onClick={async () => { }} />
          </Link>

          {positionList.length > 0 ? (
            <div className="grid mt-2 w-full gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-[130px]">
              {positionList.map((position, index) => (
                <Link
                  key={index}
                  href={`/manage-position?id=${position.address}`}
                >
                  <div
                    key={position.id}
                    className="bg-grey3 rounded-lg p-2 flex flex-col gap-2"
                  >
                    <div className="relative w-full h-[105px]">
                      <Image
                        fill={true}
                        src={positionImg.src}
                        alt="Position Image"
                      />
                    </div>

                    <div className="flex flex-col justify-between items-center gap-1">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-ss text-white1">Create on</span>
                        <span className="text-xs">{position.createdAt}</span>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <span className="text-ss text-white1">Total</span>
                        <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                          {/* ${position.valueUSD} */}
                        </span>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-1 items-center">
                          <Avatar size={20} src={position.token0.image} />
                          <span className="text-xs">
                            {position.token0.symbol}
                          </span>
                        </div>
                        <span className="text-xs">
                          {position.amount0.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-1 items-center">
                          <Avatar size={20} src={position.token1.image} />
                          <span className="text-xs">
                            {position.token1.symbol}
                          </span>
                        </div>
                        <span className="text-xs">
                          {position.amount1.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center w-full gap-2 min-h-96">
              <IconCircleInfo />
              <p className="text-base text-white2">No Position Found</p>
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-ss text-white1">
                  You don&apos;t have any positions for this pool
                </p>
                <p className="text-ss text-white1">Let&apos;s create one!</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col pl-4 pr-4">Loading</div>
      )}
    </Page>
  );
}
