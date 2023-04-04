import React from "react";

import ConnectWallet from "../../common/ConnectWallet";
import ThemeSelector from "../../common/ThemeSelector";

import { ReactComponent as LogoImg } from "../../../assets/img/logo.svg";

const Header = () => {
  return (
    <div className="w-full overflow-x-hidden relative">
      <div className="w-full h-20 flex justify-center">
        <div className="max-w-[1440px] w-full px-20 flex justify-between items-center">
          <div className="flex-1 flex items-center">
            <div className="w-[72px] h-[72px] flex justify-center items-center">
              <LogoImg className="w-9 h-6 dark:fill-white fill-special-black" />
            </div>
          </div>
          <div className="flex-1 justify-end items-center flex gap-3">
            <ThemeSelector />
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
