import { observable, action } from "mobx";
import { ethers } from "ethers";
import PriceStore from "stores/prices";
import PoolStore from "stores/pools";
import { pools, kovanPools } from "eth/contracts";
import { tokens, kovanTokens } from "eth/contracts";
import debounce from "lodash.debounce";

const defaultNetwork = "homestead";

// Specify your own API keys
// Each is optional, and if you omit it the default
// API key for that service will be used.
const provider = ethers.getDefaultProvider(defaultNetwork, {
  etherscan: process.env.REACT_APP_ETHERSCAN_API_KEY,
  alchemy: "Ef_cXLJ1-KpEAh0g9ysr83o9JN-TdkMA",
});

class Eth {
  @observable provider: any = provider;
  @observable networkName: string = "homestead";
  @observable currentBlock: number = 0;

  @action updateBlockNumber = (newBlock: number) => {
    if (newBlock - this.currentBlock > 1) {
      console.log("ZZZ *** block update");
      this.currentBlock = newBlock;
      const getPrices = debounce(PriceStore.fetchPrices, 2000, {
        leading: false,
        trailing: true,
      });
      getPrices(this.provider);
    }
  };
  @action changeProvider = (account: string, provider: any) => {
    console.log("ZZZ *** changing provider", provider);
    this.provider = provider;
    this.updatePricingData(account, provider);
    provider.off("block");
    provider.on(
      "block",
      debounce(this.updateBlockNumber, 1000, { leading: false, trailing: true })
    );
  };

  updatePricingData = (account: string, library: any) => {
    PriceStore.fetchBalances(account, library);
    PriceStore.fetchPrices(library);
    PoolStore.getAllUserPoolData(account, library);
  };

  getTokensForNetwork = () => {
    switch (this.networkName) {
      case "kovan": {
        return kovanTokens;
      }
      default: {
        return tokens;
      }
    }
  };

  getPoolsForNetwork = () => {
    switch (this.networkName) {
      case "kovan": {
        return kovanPools;
      }
      default: {
        return pools;
      }
    }
  };
}

export default new Eth();
