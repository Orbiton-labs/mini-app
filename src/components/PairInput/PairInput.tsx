import { Icon20AnglesUpDown } from "@/icons/20/angles-up-down";
import { Token } from "@/types/Token";
import { motion } from "framer-motion";
import { FC, FocusEventHandler, useState } from "react";
import { SelectTokenWithInputAmount } from "../SelectTokenWithInputAmount/SelectTokenWithInputAmount";

export interface PairInputProps {
  token1: Token | null;
  token2: Token | null;
  setToken1: (token: Token) => void;
  setToken2: (token: Token) => void;
  setAmount1: (amount: string | undefined) => void;
  setAmount2: (amount: string | undefined) => void;
  displayTokenList: () => void;
  tokenList: Token[];
  reverseOrder: () => void;
  canSwapOrder: boolean;
  hideBalance: boolean;
  canChangeToken0?: boolean;
  canChangeToken1?: boolean;
  disable0?: boolean;
  disable1?: boolean;
  onFocus1?: FocusEventHandler<HTMLInputElement>;
  onFocus2?: FocusEventHandler<HTMLInputElement>;
}

export const PairInput: FC<PairInputProps> = ({
  token1,
  token2,
  setToken1,
  setToken2,
  setAmount1,
  setAmount2,
  reverseOrder,
  displayTokenList,
  tokenList,
  hideBalance = false,
  canSwapOrder = true,
  canChangeToken0 = true,
  canChangeToken1 = true,
  disable0 = false,
  disable1 = false,
  onFocus1,
  onFocus2,
}) => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    reverseOrder();

  };

  return (
    <>
      <div className="flex flex-col items-center justify-center relative gap-2 w-full">
        <motion.div
          className="w-full"
          animate={{
            y: isSwapped ? 114 : 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
        >
          <SelectTokenWithInputAmount
            hideBalance={hideBalance}
            selectedToken={isSwapped ? token2 : token1}
            tokenList={tokenList}
            displayTokenList={displayTokenList}
            setToken={isSwapped ? setToken2 : setToken1}
            setAmount={isSwapped ? setAmount2 : setAmount1}
            canChangeToken={canChangeToken0}
            onFocus={isSwapped ? onFocus2 : onFocus1}
            disabledInput={isSwapped ? disable1 : disable0}
          />
        </motion.div>

        {canSwapOrder && (
          <motion.div
            className="absolute z-[1] bg-black1 p-3 rounded-full border border-grey7 cursor-pointer hover:bg-grey7"
            onClick={handleSwap}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.85, rotate: 180 }}
            animate={{ rotate: isSwapped ? 180 : 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <Icon20AnglesUpDown />
          </motion.div>
        )}

        <motion.div
          className="w-full"
          animate={{
            y: isSwapped ? -114 : 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
        >
          <SelectTokenWithInputAmount
            tokenList={tokenList}
            hideBalance={hideBalance}
            selectedToken={isSwapped ? token1 : token2}
            displayTokenList={displayTokenList}
            setToken={isSwapped ? setToken1 : setToken2}
            setAmount={isSwapped ? setAmount1 : setAmount2}
            canChangeToken={canChangeToken1}
            onFocus={isSwapped ? onFocus1 : onFocus2}
            disabledInput={isSwapped ? disable0 : disable1}
          />
        </motion.div>
      </div>
    </>
  );
};
