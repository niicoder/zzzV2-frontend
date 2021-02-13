import React from "react";
import { observer } from "mobx-react";
import { useWeb3React } from "@web3-react/core";
import Layout from "components/Layout";
import PoolStore from "stores/pools";
import PriceStore from "stores/prices";
import Connectors from "components/WalletUnlock/WalletUnlock";
import PoolsBrowser from "components/PoolPreviewContainer/PoolPreviewContainer";
import MainPools from "components/MainPools/MainPools";
import ListedTokens from "./ListedTokens";
import { useInactiveListener, useEagerConnect } from "hooks/web3";
import bed from "assets/swimming_pool.svg";
import unismall from "assets/uniswap_100.webp";
import {
  BoxContainer,
  PoolsContainer,
  Box,
  ExtraContainer,
  MarginForMenu,
  BuyButtons,
  BuyButtonZZZ,
  BuyButtonNAP,
} from "./Pools.styles";
import ExtraContent from "./ExtraContent";

function Pools() {
  const { account } = useWeb3React();
  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  /**
   * Limited UI for non-logged in users
   */

  if (!account) {
    return (
      <Layout view="Pools" type="horizontal">
        <Layout.MainContent view="pools">
          <MarginForMenu>
            <BuyButtons>
              <BuyButtonZZZ>
                <img src={unismall} className="uni-logo" alt="uniswap" />
                Get ZZZ
              </BuyButtonZZZ>
              <BuyButtonNAP>
                <img src={unismall} className="uni-logo" alt="uniswap" />
                Get NAP
              </BuyButtonNAP>
            </BuyButtons>
            <Box>
              <h1>Welcome to the pools!</h1>
              <img src={bed} alt="bed" width="175" />
            </Box>
            <Box>
              <h2>To interact with the pools please unlock your wallet </h2>
              <h3>(Also required to see closed / retired pools)</h3>
              <Connectors />
            </Box>
            <PoolsContainer>
              <PoolsBrowser full />
            </PoolsContainer>
          </MarginForMenu>
        </Layout.MainContent>
        <ExtraContent />
      </Layout>
    );
  }

  /**
   * Full UI for logged in users
   */

  const { totalRewardsUSD, totalStakedUSD } = PoolStore;
  return (
    <Layout view="Pools" type="horizontal">
      <Layout.MainContent view="pools">
        <BuyButtons activePools={true}>
          <BuyButtonZZZ
            href="https://uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={unismall} className="uni-logo" alt="uniswap" />
            <span>Get ZZZ</span>
          </BuyButtonZZZ>
          <BuyButtonNAP
            href="https://uniswap.info/pair/0x0de0322d3ac0d5002e2bc9c3a188728728d90799"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={unismall} className="uni-logo" alt="uniswap" />
            <span>Get NAP</span>
          </BuyButtonNAP>
        </BuyButtons>
        <BoxContainer color="black">
          <div className="info">
            <div className="flex-split">
              <div className="text-container">
                <h1>Welcome to the pools!</h1>
                <span className="accountnumber">
                  {account?.substring(0, 6)}...
                  {account?.substring(35, account.length)}
                </span>
              </div>
              <ExtraContainer>
                <div className="network-info">
                  <Box color="white">
                    <h4>Your total rewards</h4>
                    <h3 className="tvl-usd">${totalRewardsUSD.toFixed(2)}</h3>
                  </Box>
                </div>
              </ExtraContainer>
              <ExtraContainer>
                <div className="network-info">
                  <Box color="white">
                    <h4>Your total stake</h4>
                    <h3 className="tvl-usd">
                      ${totalStakedUSD.usd.toFixed(2)}
                    </h3>
                  </Box>
                </div>
              </ExtraContainer>
            </div>
            <div className="info info-balances">
              {ListedTokens.map(({ name, icon }) => {
                const tokenPrice = PriceStore.prices.get(name);
                const balance = PriceStore.balances.get(name);
                return (
                  <div key={`token-list-${name}`} className="balance-token">
                    <img src={icon} className="balance-token-icon" alt={name} />
                    <span className="balance-token-name">
                      <b>{balance?.toFixed(4)}</b>
                    </span>
                    <div className="balance-token-name">
                      1 {name} = ${tokenPrice?.toFixed(4)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <PoolsContainer>
            <MainPools />
          </PoolsContainer>
        </BoxContainer>
      </Layout.MainContent>
      <ExtraContent />
    </Layout>
  );
}
export default observer(Pools);
