import React, { useState } from "react";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import { ethers } from "ethers";

import EthImg from "../../assets/img/eth.png";
import { ReactComponent as InfoImg } from "../../assets/img/info.svg";
import { ReactComponent as ChervonDownImg } from "../../assets/img/chervon-down.svg";
import TokenList from "../common/TokenList";
import ContractInfo from "../../utils/ContractInfo";

const Deposit = () => {
  const [tokenListVisible, setTokenListVisible] = useState(false);
  const [amount, setAmount] = useState("0.0");
  const [l1Address, setL1Address] = useState("");
  const onTokenSelectBtnClicked = () => setTokenListVisible(!tokenListVisible);
  const fee = 0.002;

  const deposit = async () => {
    const config = await prepareWriteContract({
      address: ContractInfo.address as `0x${string}`,
      abi: ContractInfo.abi,
      functionName: "deposit(uint256,uint256)",
      args: [
        ethers.utils.parseEther(amount),
        l1Address,
        { value: ethers.utils.parseEther((Number(amount) + fee).toString()) },
      ],
    });

    await writeContract(config);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] flex justify-center px-5 pb-8">
        <div className="max-w-[590px] w-full mg-18 sm:mt-24 flex flex-col gap-5">
          <div className="w-full p-5 flex flex-col gap-3 bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <p className="text-base leading-6 font-normal">Deposit</p>
                <InfoImg className="dark:stroke-white stroke-special-black" />
              </div>
            </div>
            <div className="p-5 flex justify-between items-center rounded-lg bg-[rgba(7,7,10,0.03)] dark:bg-[#14151A] border-[1px] border-[rgba(7,7,10,0.1)] dark:border-[rgba(255,255,255,0.1)]">
              <div className="w-full">
                <p className="text-xs font-light leading-[14px] opacity-50">
                  From
                </p>
                <div className="w-full flex justify-between">
                  <input
                    className="mt-2 text-[28px] leading-6 font-light outline-none bg-transparent"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <button
                    className="flex-none flex gap-2 items-center bg-[rgba(7,7,10,0.07)] dark:bg-[#25262B] rounded-lg px-3 py-2"
                    onClick={onTokenSelectBtnClicked}
                  >
                    <img className="h-7 w-7" src={EthImg} alt="" />
                    <p className="text-xl font-medium leading-6">ETH</p>
                    <ChervonDownImg className="dark:fill-white fill-special-black flex-none" />
                  </button>
                  {tokenListVisible && (
                    <TokenList setTokenListVisible={setTokenListVisible} />
                  )}
                </div>
              </div>
            </div>
            <div className="p-5 flex justify-between items-center rounded-lg bg-[rgba(7,7,10,0.03)] dark:bg-[#14151A] border-[1px] border-[rgba(7,7,10,0.1)] dark:border-[rgba(255,255,255,0.1)]">
              <div className="w-full">
                <p className="text-xs font-light leading-[14px] opacity-50">
                  To
                </p>
                <div className="w-full flex justify-between">
                  <p className="mt-2 text-[28px] leading-6 font-light">
                    StarkNet
                  </p>
                  <div className="flex gap-2 items-center">
                    <img className="h-7 w-7" src={EthImg} alt="" />
                    <p className="text-xl font-medium leading-6">ETH</p>
                  </div>
                </div>
                <input
                  type="text"
                  className="w-full mt-6 mb-1 text-sm leading-[17px] font-normal outline-none bg-transparent"
                  placeholder="+ Add Receiver L1/L2 address"
                  value={l1Address}
                  onChange={(e) => setL1Address(e.target.value)}
                />
              </div>
            </div>
            <button
              className="mt-5 rounded-full w-full py-3 dark:bg-white bg-special-black text-base font-medium leading-5 text-white dark:text-special-black hover:opacity-60"
              onClick={deposit}
            >
              Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
