import BigNumber from "bignumber.js";

export const printBigInt = (
  value: string,
  decimals: number,
  fixed: number = 2
): string => {
  return new BigNumber(value)
    .div(10 ** decimals)
    .toFixed(fixed)
    .replace(/\.?0+$/, "");
};

export const bigIntToUsd = (
  value: string,
  decimals: number,
  priceUsd: number,
  fixed: number = 2
): string => {
  if (Number.isNaN(value)) {
    return "0.00";
  }

  return new BigNumber(value)
    .div(10 ** decimals)
    .multipliedBy(priceUsd)
    .toFixed(fixed)
    .replace(/\.?0+$/, "");
};

export const numberToBigInt = (value: string, decimals: number): string => {
  return new BigNumber(value).multipliedBy(10 ** decimals).toString();
};

export function truncateHash(address: string, startLength = 4, endLength = 4) {
  if (!address) return "";

  return `${address.substring(0, startLength)}...${address.substring(
    address.length - endLength
  )}`;
}
