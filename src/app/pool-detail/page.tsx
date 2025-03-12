"use client";

import { InputSearch } from "@/components/InputSearch/InputSearch";
import { Page } from "@/components/Page";
import { PoolName } from "@/components/PoolName/PoolName";
import { StatusFilter } from "@/components/StatusFilter/StatusFilter";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { SubPageTitle } from "@/components/SubPageTitle/SubPageTitle";
import { IconCircleInfo } from "@/icons/fixed/circle-info";
import { usePoolStore } from "@/store";
import { Position, PositionFilter } from "@/types/Position";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import positionImg from "../../app/_assets/position.png";

export default function PoolDetailPage() {
  const searchParams = useSearchParams();
  const poolAddress = searchParams.get("sel-pool");

  const setSelectedPool = usePoolStore((state) => state.setSelectedPool);
  const selectedPool = usePoolStore((state) => state.selectedPool);

  useEffect(() => {
    if (poolAddress) {
      setSelectedPool(poolAddress);
    }
  }, [poolAddress]);

  const [status, setStatus] = useState<string>(PositionFilter.ACTIVE);
  const [positions, setPositions] = useState<Position[]>([]);
  const [total, setTotal] = useState({
    numOfPos: "3",
    tvl: "1723",
    fee24h: "20",
  });

  return (
    <Page>
      {selectedPool ? (
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
            <StatusFilter
              displayStatusList={() => {}}
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
                token1Img={selectedPool.token1.token.image}
                token2Img={selectedPool.token2.token.image}
                token1Name={selectedPool.token1.token.symbol}
                token2Name={selectedPool.token2.token.symbol}
                feeTier={selectedPool.feeTier.fee}
                className="text-xs"
              />
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-ss text-white1">TVL</p>
                <p className="text-xs">${selectedPool.tvl}</p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <p className="text-ss text-white1">Volume 24H</p>
                <p className="text-xs">${selectedPool.volume24h}</p>
              </div>

              <div className="flex flex-col items-end gap-1">
                <p className="text-ss text-white1">Fee 24H</p>
                <p className="text-xs">${selectedPool.fee24h}</p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <p className="text-ss text-white1">APR</p>
                <p className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                  {selectedPool.apr}%
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

          <Link href="/add-liquidity">
            <SubmitButton content="Create Position" />
          </Link>

          {positions.length > 0 ? (
            <div className="grid mt-2 w-full gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-[130px]">
              {positions.map((position, index) => (
                <Link key={index} href="/manage-position">
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
                          {/* <Avatar size={20} src={position.token0.image} /> */}
                          <span className="text-xs">
                            {/* {position.token0.symbol} */}
                          </span>
                        </div>
                        {/* <span className="text-xs">{position.amount0}</span> */}
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-1 items-center">
                          {/* <Avatar size={20} src={position.token1.image} /> */}
                          <span className="text-xs">
                            {/* {position.token1.symbol} */}
                          </span>
                        </div>
                        <span className="text-xs">{position.amount1}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
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
          )}
        </div>
      ) : (
        <div className="flex flex-col pl-4 pr-4">Loading</div>
      )}
    </Page>
  );
}
