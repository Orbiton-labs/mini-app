import Decimal from "decimal.js";

export function cn(...classes: (string | undefined)[]): string {
  return [...classes].join(' ');
}

export function toAmount(value: string, decimal: number): string {
  return new Decimal(value).div(10 ** decimal).toString();
}