"use client";

import { Page } from "@/components/Page";
import { IconMinus } from "@/icons/fixed/minus";
import { IconPlus } from "@/icons/fixed/plus";
import {
  Area,
  AreaChart,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 3000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function AddLiquidityPage() {
  return (
    <Page>
      <div className="flex flex-col gap-3 pl-4 pr-4">
        <div className="flex justify-between item-center">
          <span className="text-base">1. Select Range</span>
          <span className="text-base">Next</span>
        </div>

        <div className="flex flex-col gap-2 justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs">Choose liquidity preset</span>
            <div className="flex gap-2">
              <span className="py-2 px-4 text-xs border rounded-lg border-grey3 bg-gradient-to-b from-green1 to-green2 text-black2">
                TON
              </span>
              <span className="py-2 px-4 text-xs border rounded-lg border-grey3">
                USDT
              </span>
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

        <div>
          <div>+-</div>
          <ResponsiveContainer width="100%" height="100%" className="min-h-40">
            <AreaChart
              width={200}
              height={60}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient
                  id="paint0_linear_290_2975"
                  x1="180.5"
                  y1="0"
                  x2="180.5"
                  y2="175"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#07C557" />
                  <stop offset="1" stop-color="#82FA73" stop-opacity="0.02" />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="none"
                fill="url(#paint0_linear_290_2975)"
              />
              <ReferenceLine segment={[
                { x: "Page C", y: 0 },
                { x: "Page C", y: 2000 },
              ]} stroke="white" ifOverflow="hidden"/>
              <ReferenceArea

                x1="Page C"
               
                x2="Page E"
                stroke="none"

              />
              <ReferenceLine segment={[
                { x: "Page E", y: 0 },
                { x: "Page E", y: 3000 },
              ]} stroke="white" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-3 text-xs">
          <div className="flex flex-col gap-2 justify-between">
            <p>Min Price</p>
            <div className="flex justify-between items-center gap-6">
              <div className="p-3 bg-grey3 rounded-full">
                <IconMinus />
              </div>
              <input
                type="number"
                className="bg-grey3 py-4 w-full rounded-lg text-center text-sm"
                value={3.6402}
              />
              <div className="p-3 bg-grey3 rounded-full">
                <IconPlus />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-between">
            <p>Max Price</p>
            <div className="flex justify-between items-center gap-6">
              <div className="p-3 bg-grey3 rounded-full">
                <IconMinus />
              </div>
              <input
                type="number"
                className="bg-grey3 py-4 w-full rounded-lg text-center text-sm"
                value={3.6402}
              />
              <div className="p-3 bg-grey3 rounded-full">
                <IconPlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
