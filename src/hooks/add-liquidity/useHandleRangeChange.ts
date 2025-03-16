import {
  Jetton,
  nearestUsableTick,
  Price,
  priceToClosestTick,
  tryParsePrice,
} from "@orbiton_labs/v3-contracts-sdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useHandleRangeChange = (
  jettons: [Jetton | null, Jetton | null],
  tickSpacing: number,
  isToken0Base: boolean,
  priceLower: Price<Jetton, Jetton> | null,
  priceUpper: Price<Jetton, Jetton> | null,
  setTickPair: Dispatch<SetStateAction<[number, number]>>
) => {
  const [inputMinPrice, setInputMinPrice] = useState<string>("0");
  const [inputMaxPrice, setInputMaxPrice] = useState<string>("0");

  useEffect(() => {
    if (!priceLower) return;

    setInputMinPrice(
      isToken0Base
        ? priceLower.toSignificant(6)
        : priceLower.invert().toSignificant(6)
    );
  }, [priceLower]);

  useEffect(() => {
    if (!priceUpper) return;

    setInputMaxPrice(
      isToken0Base
        ? priceUpper.toSignificant(6)
        : priceUpper.invert().toSignificant(6)
    );
  }, [priceUpper]);

  const onLeftRangeInput = (typedValue: string) => {
    const [jetton0, jetton1] = jettons;
    console.log("on left range input", typedValue);

    if (!jetton0 || !jetton1) return;

    const parsedPrice = tryParsePrice(jetton0, jetton1, typedValue);

    if (!parsedPrice) {
      console.log("Parse left price failed");
      return;
    }

    if (!tickSpacing) {
      console.log("No tick spacing info");
      return;
    }

    const correspondingTick = nearestUsableTick(
      priceToClosestTick(parsedPrice),
      tickSpacing
    );
    console.log("on left correspondingTick", correspondingTick);

    setTickPair(([_, tickUpper]) => [correspondingTick, tickUpper]);
  };

  const onRightRangeInput = (typedValue: string) => {
    const [jetton0, jetton1] = jettons;
    console.log("on right range input", typedValue);

    if (!jetton0 || !jetton1) return;

    const parsedPrice = tryParsePrice(jetton0, jetton1, typedValue);

    if (!parsedPrice) {
      console.log("Parse right price failed");
      return;
    }

    if (!tickSpacing) {
      console.log("No tick spacing info");
      return;
    }

    const correspondingTick = nearestUsableTick(
      priceToClosestTick(parsedPrice),
      tickSpacing
    );
    console.log("on right correspondingTick", correspondingTick);

    setTickPair(([tickLower, _]) => [tickLower, correspondingTick]);
  };

  const onDecreaseLeftRange = () => {
    if (!tickSpacing) {
      console.log("No tick spacing info");
      return;
    }
    setTickPair(([tickLower, tickUpper]) => [
      tickLower - tickSpacing * 2,
      tickUpper,
    ]);
  };

  const onIncreaseLeftRange = () => {
    if (!tickSpacing) {
      console.log("No tick spacing info");
      return;
    }
    setTickPair(([tickLower, tickUpper]) => [
      tickLower + tickSpacing * 2,
      tickUpper,
    ]);
  };

  const onDecreaseRightRange = () => {
    if (!tickSpacing) {
      console.log("No tick spacing info");
      return;
    }
    setTickPair(([tickLower, tickUpper]) => [
      tickLower,
      tickUpper - tickSpacing * 2,
    ]);
  };

  const onIncreaseRightRange = () => {
    if (!tickSpacing) {
      console.log("No tick spacing info");
      return;
    }
    setTickPair(([tickLower, tickUpper]) => [
      tickLower,
      tickUpper + tickSpacing * 2,
    ]);
  };

  return {
    inputMinPrice,
    inputMaxPrice,
    setInputMinPrice,
    setInputMaxPrice,
    onLeftRangeInput,
    onRightRangeInput,
    onDecreaseLeftRange,
    onIncreaseLeftRange,
    onDecreaseRightRange,
    onIncreaseRightRange,
  };
};
