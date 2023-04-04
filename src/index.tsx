import React from "react";
import { createRoot } from "react-dom/client";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

const { provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <div className="w-full bg-blend-difference dark:bg-blend-normal bg-opacity-90 dark:bg-opacity-100 bg-[#EDEDED] dark:bg-[#14151A] bg-dark-image bg-no-repeat dark:bg-[length:130%_100vh] min-h-[100vh]">
        <App />
      </div>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
