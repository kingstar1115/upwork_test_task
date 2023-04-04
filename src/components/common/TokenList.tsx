import React, { useEffect, useRef } from "react";
import TokenItem from "./TokenItem";

import { ReactComponent as CloseImg } from "../../assets/img/close.svg";
import EthImg from "../../assets/img/eth.png";

const TokenList = ({
  setTokenListVisible,
}: {
  setTokenListVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as any)
      ) {
        setTokenListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setTokenListVisible]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-20 flex items-center justify-center backdrop-blur-sm">
      <div
        ref={wrapperRef}
        className="w-full max-w-[414px] bg-white dark:bg-[#14151A] flex flex-col gap-3 p-5 rounded-[18px] shadow-sm border-[1px] border-[rgba(7,7,10,0.1)]"
      >
        <div className="w-full flex justify-between">
          <p className="text-base leading-6">Select a token</p>
          <button onClick={() => setTokenListVisible(false)}>
            <CloseImg className="w-4 h-4 dark:stroke-white stroke-special-black" />
          </button>
        </div>
        <div className="h-[1px] w-full bg-[rgba(255,255,255,0.1)]" />
        <div className="flex flex-col gap-6">
          <TokenItem
            name="Eth"
            imgSource={EthImg}
            descrption="Stack’s native token"
          />
        </div>
      </div>
    </div>
  );
};

export default TokenList;
