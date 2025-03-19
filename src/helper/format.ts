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

/**
 * Format a number to K (thousands), M (millions), B (billions) format
 * @param value The number to format
 * @param decimals Number of decimal places (default: 1)
 * @returns Formatted string with appropriate suffix
 */
export function formatLargeNumber(value: number | string, decimals: number = 1): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(num)) return '0';

  const absValue = Math.abs(num);

  if (absValue >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(decimals).replace(/\.0+$/, '') + 'B';
  }

  if (absValue >= 1_000_000) {
    return (num / 1_000_000).toFixed(decimals).replace(/\.0+$/, '') + 'M';
  }

  if (absValue >= 1_000) {
    return (num / 1_000).toFixed(decimals).replace(/\.0+$/, '') + 'K';
  }

  return num.toFixed(decimals).replace(/\.0+$/, '');
}
