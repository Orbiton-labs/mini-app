"use client";

import LiquidityChartRangeInput from "@/components/LiquidityChart";
import { Bound } from "@/components/LiquidityChart/types";
import { Page } from "@/components/Page";
import { Slider } from "@/components/Slider/Slider";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { SubPageTitle } from "@/components/SubPageTitle/SubPageTitle";
import { usePositionDetail } from "@/hooks/manage-position/usePositionDetail";
import { usePositionTransform } from "@/hooks/manage-position/usePositionTransform";
import { cn } from "@/lib/utils";
import { Avatar, AvatarStack } from "@telegram-apps/telegram-ui";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

enum TABS {
  COLLECT_FEE = "Collect Fees",
  REMOVE_LIQUIDITY = "Remove Liquidity",
}

const PERCENT = [
  {
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 75,
  },
  {
    value: 100,
  },
];

export default function ManagePositionPage() {
  const searchParams = useSearchParams();
  const positionAddress = searchParams.get("id");

  const { poolDetail, poolDetailLoading, position, positionLoading } =
    usePositionDetail(positionAddress || "");

  const {
    base,
    quote,
    amount0Usd,
    amount1Usd,
    percent0,
    percent1,
    totalUsd,
    price0,
    price1,
    price,
    isToken0Base,
    setIsToken0Base,
  } = usePositionTransform(position, poolDetail);

  const [selectedTab, setSelectedTab] = useState(TABS.COLLECT_FEE);

  const [percent, setPercent] = useState<number>(PERCENT[0].value);
  const [isCustom, setIsCustom] = useState<boolean>(false);

  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4">
        <SubPageTitle title="Manage Position" />
        <div className="flex flex-col gap-2 mt-4 mb-32">
          <div className="grid grid-cols-2 gap-3">
            {Object.values(TABS).map((tab) => (
              <button
                onClick={() => setSelectedTab(tab)}
                key={tab}
                className={`py-4 px-3 ${
                  selectedTab === tab ? " bg-green3" : " bg-grey8"
                }  text-xs rounded-lg text-white2`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            {position && (
              <>
                <div className={`flex justify-start items-center gap-2`}>
                  <AvatarStack className="pools_avatar-stack">
                    <Avatar size={28} src={position.token0.image} />
                    <Avatar
                      style={{
                        marginLeft: -5,
                      }}
                      size={28}
                      src={position.token1.image}
                    />
                  </AvatarStack>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white2">
                      {position.token0.symbol} - {position.token1.symbol}
                    </span>
                    <span className="text-ss text-grey5">
                      #{position.id} / {poolDetail && poolDetail.feeTier}%
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 items-center py-1 px-2 bg-grey8 rounded-lg">
                  <div className="w-[10px] h-[10px] bg-green5 rounded-full"></div>
                  <span className="text-white2 text-xs">{position.status}</span>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-2 justify-between">
            <div className="flex justify-between items-center">
              <span className="text-xs">Choose base</span>
              {position && (
                <div className="flex gap-2">
                  <span
                    onClick={() => setIsToken0Base(true)}
                    className={`py-2 px-4 text-xs border rounded-lg border-grey3 ${
                      isToken0Base && "bg-gradient-to-b from-green1 to-green2"
                    }`}
                  >
                    {position.token0.symbol}
                  </span>
                  <span
                    onClick={() => setIsToken0Base(false)}
                    className={`py-2 px-4 text-xs border rounded-lg border-grey3 ${
                      !isToken0Base && "bg-gradient-to-b from-green1 to-green2"
                    }`}
                  >
                    {position.token1.symbol}
                  </span>
                </div>
              )}
            </div>

            {position && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col justify-between items-center gap-1 border border-solid rounded-lg border-grey8 py-2">
                  <p className="text-center text-ss text-white2">Min Price</p>
                  <p className="text-center text-xs text-white2">
                    {price0 &&
                      (isToken0Base
                        ? price0?.toSignificant(4)
                        : price0?.invert().toSignificant(4))}
                  </p>
                  <p className="text-center text-ss text-grey5">
                    {quote} per {base}
                  </p>
                </div>
                <div className="flex flex-col justify-between items-center gap-1 border border-solid rounded-lg border-grey8 py-2">
                  <p className="text-center text-ss text-white2">Max Price</p>
                  <p className="text-center text-xs text-white2">
                    {price1 &&
                      (isToken0Base
                        ? price1?.toSignificant(4)
                        : price1?.invert().toSignificant(4))}
                  </p>
                  <p className="text-center text-ss text-grey5">
                    {quote} per {base}
                  </p>
                </div>
              </div>
            )}

            {position && poolDetail && (
              <div className="flex justify-between items-center">
                <span className="text-xs">Current Price</span>
                <p className="text-xs py-2 px-3 bg-grey3 rounded-lg border border-grey7 ">
                  <span className=" bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                    {price.toFixed(2)} {quote}
                  </span>{" "}
                  per {base}
                </p>
              </div>
            )}
          </div>

          {poolDetail && price0 && price1 && (
            <div className="relative">
              <LiquidityChartRangeInput
                pool={poolDetail}
                poolAddr={poolDetail.address}
                priceLower={price0}
                priceUpper={price1}
                ticksAtLimit={{
                  [Bound.LOWER]: false,
                  [Bound.UPPER]: false,
                }}
                interactive={false}
                price={Number(price)}
                onLeftRangeInput={() => {}}
                onRightRangeInput={() => {}}
                variant={"dark"}
                width={window.innerWidth > 768 ? 600 : 320}
                isSorted={isToken0Base}
              />
            </div>
          )}

          {selectedTab === TABS.COLLECT_FEE && position && (
            <div className="flex flex-col justify-between items-center gap-1 mb-2">
              {position && (
                <div className="flex justify-between items-center w-full">
                  <span className="text-ss text-white1">Create on</span>
                  <span className="text-xs">{position.createdAt}</span>
                </div>
              )}
              {position && (
                <div className="flex justify-between items-center w-full">
                  <span className="text-ss text-white1">Total</span>
                  <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                    ${totalUsd.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="grid grid-cols-2 gap-2 w-full">
                {position && (
                  <div className="flex gap-1 items-center bg-grey3 rounded-lg py-1 px-2">
                    <Avatar size={20} src={position.token0.image} />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-white2">
                        {position.amount0.toFixed(2)} {position.token0.symbol}
                      </span>
                      <span className="text-ss text-grey5">
                        ${amount0Usd.toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}
                {position && (
                  <div className="flex gap-1 items-center bg-grey3 rounded-lg py-1 px-2">
                    <Avatar size={20} src={position.token1.image} />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-white2">
                        {position.amount1.toFixed(2)} {position.token1.symbol}
                      </span>
                      <span className="text-ss text-grey5">
                        ${amount1Usd.toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-[0.2rem] w-full mt-2">
                <div
                  className={cn("h-1 bg-white2 rounded-l-full")}
                  style={{
                    width: `${percent0 * 0.99}%`,
                  }}
                ></div>
                <div
                  className={cn("h-1 bg-yellow1 rounded-r-full")}
                  style={{
                    width: `${percent1 * 0.99}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between gap-[0.2rem] w-full mt-2">
                {position && (
                  <div className="flex gap-1 items-center">
                    <Avatar size={20} src={position.token0.image} />
                    <span className="text-xs text-white2">
                      {percent0.toFixed(0)}%
                    </span>
                  </div>
                )}
                {position && (
                  <div className="flex gap-1 items-center">
                    <Avatar size={20} src={position.token1.image} />
                    <span className="text-xs text-white2">
                      {percent1.toFixed(0)}%
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1 justify-between w-full mt-4 text-white">
                <p className="text-sm">Earn</p>
                {position && (
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 items-center">
                      <Avatar size={20} src={position.token0.image} />
                      <span className="text-xs text-white2">
                        {position.token0.symbol} Fee Earned
                      </span>
                    </div>
                    <span className="text-xs">
                      {position.fee1Earned.toFixed(2)}
                    </span>
                  </div>
                )}
                {position && (
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 items-center">
                      <Avatar size={20} src={position.token1.image} />
                      <span className="text-xs text-white2">
                        {position.token1.symbol} Fee Earned
                      </span>
                    </div>
                    <span className="text-xs">
                      {position.fee2Earned.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {selectedTab === TABS.REMOVE_LIQUIDITY && position && (
            <div className="flex flex-col justify-between items-center gap-1 w-full mb-2">
              <div className="w-full">
                <div className="mt-2 flex justify-between gap-2 items-center">
                  {PERCENT.map((option, index) => (
                    <div
                      key={option.value}
                      className={`border rounded-lg border-solid border-[grey] flex-1 py-3 text-center text-xs px-2 ${
                        percent === option.value && !isCustom
                          ? "bg-gradient-to-b from-green1 to-green2 border-green2 text-black2"
                          : "text-white2"
                      }`}
                      onClick={() => {
                        setIsCustom(false);
                        setPercent(option.value);
                      }}
                    >
                      {option.value === 100 ? "Max" : `${option.value}%`}
                    </div>
                  ))}

                  <div className="gap-2 rounded-lg flex py-3 px-3 mb-2 mt-2">
                    <input
                      className="text-white1 bg-transparent border-none focus:ring-transparent text-xs w-full"
                      placeholder="10"
                      type="number"
                      value={
                        isCustom &&
                        !PERCENT.map((option) => option.value).includes(percent)
                          ? percent
                          : undefined
                      }
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                          setPercent(value);
                        } else {
                          setPercent(PERCENT[0].value);
                          setIsCustom(false);
                        }
                      }}
                      onBlur={(e) => {
                        const value = parseFloat(e.target.value);
                        if (isNaN(value)) {
                          setPercent(PERCENT[0].value);
                          setIsCustom(false);
                        }
                      }}
                      onFocus={() => setIsCustom(true)}
                    />
                    <span className="text-xs text-white1">%</span>
                  </div>
                </div>

                <Slider />
              </div>

              <p className="text-sm w-full mb-2">You&apos;ll receive</p>
              {position && (
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 items-center">
                    <Avatar size={20} src={position.token0.image} />
                    <span className="text-xs text-white2">
                      Pooled {position.token0.symbol}
                    </span>
                  </div>
                  <p className="text-xs">
                    1.0123 <span className="text-xs text-grey5">($3.12)</span>
                  </p>
                </div>
              )}
              {position && (
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 items-center">
                    <Avatar size={20} src={position.token1.image} />
                    <span className="text-xs text-white2">
                      Pooled {position.token1.symbol}
                    </span>
                  </div>
                  <p className="text-xs">
                    1.0123 <span className="text-xs text-grey5">($3.12)</span>
                  </p>
                </div>
              )}
              {position && (
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 items-center">
                    <Avatar size={20} src={position.token0.image} />
                    <span className="text-xs text-white2">
                      {position.token0.symbol} Fee Earned
                    </span>
                  </div>
                  <span className="text-xs">0</span>
                </div>
              )}
              {position && (
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 items-center">
                    <Avatar size={20} src={position.token1.image} />
                    <span className="text-xs text-white2">
                      {position.token1.symbol} Fee Earned
                    </span>
                  </div>
                  <span className="text-xs">0</span>
                </div>
              )}
            </div>
          )}

          <SubmitButton
            content={`${
              selectedTab === TABS.COLLECT_FEE
                ? "Collect Fees"
                : "Remove Liquidity"
            }`}
          />
        </div>
      </div>
    </Page>
  );
}
