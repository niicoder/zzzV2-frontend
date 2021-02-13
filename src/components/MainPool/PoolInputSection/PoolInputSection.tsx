import Button from "components/Button/Button";
import {
  getAllowance,
  maxStake,
  maxWithdraw,
  stake,
  withdraw,
} from "eth/methods";
import React, { memo } from "react";
import { Pool } from "types";
import { InputSection } from "./PoolInputSection.styles";

type Props = {
  hasAllowance: boolean;
  poolClosed: boolean;
  canStake: boolean;
  canWithdraw: boolean;
  canMaxStake: boolean;
  updater: Function;
  pool: Pool;
  signer: any;
  setInputValue: Function;
  inputValue?: number;
  canMaxWithdraw: boolean;
  library: any;
  account: string;
  tooltips: (key: string, boostCost?: number) => string | undefined;
};

function PoolInputSection({
  hasAllowance,
  poolClosed,
  canMaxWithdraw,
  canStake,
  canMaxStake,
  canWithdraw,
  updater,
  pool,
  signer,
  setInputValue,
  inputValue,
  tooltips,
  library,
  account,
}: Props) {
  if (hasAllowance) {
    return (
      <InputSection>
        <input
          type="number"
          className="col the-input"
          value={inputValue}
          placeholder="Enter a stake or a withdrawal amount"
          onChange={(e) => setInputValue(parseFloat(e.target.value))}
        />
        <div className="button-container">
          {!poolClosed ? (
            <>
              <Button
                color="#60db97"
                rounded={false}
                disabled={!canStake}
                tooltip={tooltips("stake")}
                onClick={() =>
                  updater(() => stake(pool, signer, inputValue!, setInputValue))
                }
              >
                Stake
              </Button>
              <Button
                color="#BB8FCE"
                rounded={false}
                disabled={!canMaxStake}
                tooltip={tooltips("max")}
                onClick={() =>
                  updater(() => maxStake(pool, signer, account, library))
                }
              >
                Max stake
              </Button>
              <Button
                color="#58D68D"
                rounded={false}
                disabled={!canWithdraw}
                tooltip={tooltips("withdraw")}
                onClick={() =>
                  updater(() =>
                    withdraw(pool, signer, inputValue!, setInputValue)
                  )
                }
              >
                Withdraw
              </Button>
              <Button
                color="#58D68D"
                rounded={false}
                disabled={!canMaxWithdraw}
                tooltip={tooltips("withdrawall")}
                onClick={() =>
                  updater(() => maxWithdraw(pool, signer, library, account))
                }
              >
                Max withdraw
              </Button>
            </>
          ) : (
            <Button
              color="#58D68D"
              rounded={false}
              disabled={!canMaxWithdraw}
              tooltip={tooltips("withdrawall")}
              onClick={() =>
                updater(() => maxWithdraw(pool, signer, library, account))
              }
              style={{ gridColumn: "1 / 3" }}
            >
              Withdraw all
            </Button>
          )}
        </div>
      </InputSection>
    );
  } else {
    return (
      <InputSection>
        <Button
          color="#60db97"
          onClick={() => updater(() => getAllowance(pool, signer))}
        >
          Approve {pool.token.name} before you can stake!
        </Button>
      </InputSection>
    );
  }
}
export default memo(PoolInputSection);
