import React from "react";
import { useAccount, useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const ConnectWallet = () => {
  const { isConnected, address } = useAccount();

  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  const walletConnect = () => {
    if (!isConnected) connect();
  };

  return (
    <button
      onClick={walletConnect}
      className="bg-[rgba(255,255,255,0.1)] px-6 py-3 rounded-full text-base font-light leading-6 border-special-black border-[1px] dark:border-none"
      type="button"
    >
      {!isConnected
        ? "Connect Wallet"
        : `${address?.slice(0, 6)}...${address?.slice(-4)}`}
    </button>
  );
};

export default ConnectWallet;
