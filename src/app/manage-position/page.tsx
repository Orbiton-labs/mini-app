"use client";

import LiquidityChartRangeInput from "@/components/LiquidityChart";
import { Bound } from "@/components/LiquidityChart/types";
import { Page } from "@/components/Page";
import { Slider } from "@/components/Slider/Slider";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { SubPageTitle } from "@/components/SubPageTitle/SubPageTitle";
import { TokenType } from "@/types/Token";
import { Avatar, AvatarStack } from "@telegram-apps/telegram-ui";
import { useState } from "react";

enum TABS {
  COLLECT_FEE = "Collect Fees",
  REMOVE_LIQUIDITY = "Remove Liquidity",
}

const POOL = {
  token1: {
    type: TokenType.NATIVE,
    address: null,
    name: "Toncoin",
    symbol: "TON",
    image: "https://assets.dedust.io/images/ton.webp",
    decimals: 9,
    price: "3.68",
  },
  token2: {
    type: TokenType.JETTON,
    address: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    name: "Tether USD",
    symbol: "USDT",
    image: "https://assets.dedust.io/images/usdt.webp",
    decimals: 6,
    price: "0.9998",
  },
  feeTier: {
    fee: "0.3",
    tickSpacing: "60",
  },
};

const POSITION = {
  id: 0,
  pool: "TON/USDT",
  token0: POOL.token1,
  token1: POOL.token2,
  feeTier: POOL.feeTier,
  priceLower: "0.95",
  priceUpper: "1.05",
  amount0: "100",
  amount1: "10",
  valueUSD: "20.56",
  createdAt: "2/11",
};

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

const isSorted = true;
const price = "0.95";

export default function ManagePositionPage() {
  const [progress, setProgress] = useState(50);

  const [selectedTab, setSelectedTab] = useState(TABS.COLLECT_FEE);

  const [priceLower, setPriceLower] = useState(0.9);
  const [priceUpper, setPriceUpper] = useState(1.1);
  const onLeftRangeInput = (typedValue: string) => {
    console.log(typedValue);
    setPriceLower(parseFloat(typedValue));
  };
  const onRightRangeInput = (typedValue: string) => {
    console.log(typedValue);
    setPriceUpper(parseFloat(typedValue));
  };

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
                  selectedTab === tab
                    ? "text-green4 bg-green3"
                    : "text-white2 bg-grey3"
                }  text-xs rounded-lg`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className={`flex justify-start items-center gap-2`}>
              <AvatarStack className="pools_avatar-stack">
                <Avatar size={28} src={POSITION.token0.image} />
                <Avatar
                  style={{
                    marginLeft: -5,
                  }}
                  size={28}
                  src={POSITION.token1.image}
                />
              </AvatarStack>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white2">
                  {POSITION.token0.symbol} - {POSITION.token1.symbol}
                </span>
                <span className="text-ss text-grey5">
                  #{POSITION.id} / {POSITION.feeTier.fee}%
                </span>
              </div>
            </div>
            <div className="flex gap-1 items-center py-1 px-2 bg-grey3 rounded-lg">
              <div className="w-[10px] h-[10px] bg-green5 rounded-full"></div>
              <span className="text-white2 text-xs">In range</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-between">
            <div className="flex justify-between items-center">
              <span className="text-xs">Choose base</span>
              <div className="flex gap-2">
                <span className="py-2 px-4 text-xs border rounded-lg border-grey3 bg-gradient-to-b from-green1 to-green2 text-black2">
                  TON
                </span>
                <span className="py-2 px-4 text-xs border rounded-lg border-grey3">
                  USDT
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col justify-between items-center gap-1 border border-solid rounded-lg border-grey3 py-2">
                <p className="text-center text-ss text-white2">Max Price</p>
                <p className="text-center text-xs text-white2">3</p>
                <p className="text-center text-ss text-grey5">USDT per TON</p>
              </div>
              <div className="flex flex-col justify-between items-center gap-1 border border-solid rounded-lg border-grey3 py-2">
                <p className="text-center text-ss text-white2">Min Price</p>
                <p className="text-center text-xs text-white2">4.49</p>
                <p className="text-center text-ss text-grey5">USDT per TON</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs">Price</span>
              <p className="text-xs py-2 px-3 bg-grey3 rounded-lg">
                Current price:{" "}
                <span className="bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                  3.81 USDT
                </span>{" "}
                per TON
              </p>
            </div>
          </div>

          <div className="relative">
            <LiquidityChartRangeInput
              pool={"pool"}
              priceLower={priceLower}
              priceUpper={priceUpper}
              ticksAtLimit={{
                [Bound.LOWER]: false,
                [Bound.UPPER]: false,
              }}
              interactive={false}
              price={price ? parseFloat(price) : undefined}
              onLeftRangeInput={onLeftRangeInput}
              onRightRangeInput={onRightRangeInput}
              variant={"dark"}
              width={window.innerWidth > 768 ? 600 : 320}
              isSorted={isSorted}
            />
          </div>

          {selectedTab === TABS.COLLECT_FEE && (
            <div className="flex flex-col justify-between items-center gap-1 mb-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-ss text-white1">Create on</span>
                <span className="text-xs">{POSITION.createdAt}</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <span className="text-ss text-white1">Total</span>
                <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                  ${POSITION.valueUSD}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex gap-1 items-center bg-grey3 rounded-lg py-1 px-2">
                  <Avatar size={20} src={POSITION.token0.image} />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white2">
                      {POSITION.amount0} {POSITION.token0.symbol}
                    </span>
                    <span className="text-ss text-grey5">
                      ${POSITION.amount0}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 items-center bg-grey3 rounded-lg py-1 px-2">
                  <Avatar size={20} src={POSITION.token1.image} />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white2">
                      {POSITION.amount1} {POSITION.token1.symbol}
                    </span>
                    <span className="text-ss text-grey5">
                      ${POSITION.amount1}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-[0.2rem] w-full mt-2">
                <div className="h-1 w-[29%] bg-white2 rounded-l-full"></div>
                <div className="h-1 w-[69%] bg-yellow1 rounded-r-full"></div>
              </div>
              <div className="flex justify-between gap-[0.2rem] w-full mt-2">
                <div className="flex gap-1 items-center">
                  <Avatar size={20} src={POSITION.token0.image} />
                  <span className="text-xs text-white2">30%</span>
                </div>
                <div className="flex gap-1 items-center">
                  <Avatar size={20} src={POSITION.token1.image} />
                  <span className="text-xs text-white2">70%</span>
                </div>
              </div>

              <div className="flex flex-col gap-1 justify-between w-full mt-4 text-white">
                <p className="text-sm">Earn</p>
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 items-center">
                    <Avatar size={20} src={POSITION.token0.image} />
                    <span className="text-xs text-white2">TON Fee Earned</span>
                  </div>
                  <span className="text-xs">0</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 items-center">
                    <Avatar size={20} src={POSITION.token1.image} />
                    <span className="text-xs text-white2">USDT Fee Earned</span>
                  </div>
                  <span className="text-xs">0</span>
                </div>
              </div>
            </div>
          )}

          {selectedTab === TABS.REMOVE_LIQUIDITY && (
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
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <Avatar size={20} src={POSITION.token0.image} />
                  <span className="text-xs text-white2">Pooled TON</span>
                </div>
                <p className="text-xs">
                  1.0123 <span className="text-xs text-grey5">($3.12)</span>
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <Avatar size={20} src={POSITION.token1.image} />
                  <span className="text-xs text-white2">Pooled USDT</span>
                </div>
                <p className="text-xs">
                  1.0123 <span className="text-xs text-grey5">($3.12)</span>
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <Avatar size={20} src={POSITION.token0.image} />
                  <span className="text-xs text-white2">TON Fee Earned</span>
                </div>
                <span className="text-xs">0</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <Avatar size={20} src={POSITION.token1.image} />
                  <span className="text-xs text-white2">USDT Fee Earned</span>
                </div>
                <span className="text-xs">0</span>
              </div>
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
