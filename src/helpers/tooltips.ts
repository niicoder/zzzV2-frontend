import { UserPoolData } from "types";

export default (
  userPoolData?: UserPoolData,
  poolsClosed: boolean = false,
  inputAmount?: number
) => (key: string, boostCost?: number | null, boostAmount?: string) => {
  if (!userPoolData) return;
  const inputMakesSense =
    inputAmount && inputAmount !== 0 && !isNaN(inputAmount);

  const {
    tokenAmount,
    staked,
    rewards,
    boostTokenAmount,
    multiplier,
  } = userPoolData;
  switch (key) {
    case "stake": {
      if (poolsClosed) {
        return "Pool has finished";
      } else if (tokenAmount === 0) {
        return "You must have tokens to stake";
      } else if (!inputMakesSense) {
        return "Enter a staking amount first";
      } else if (inputAmount! > tokenAmount) {
        return "You do not have enough tokens";
      } else {
        return "";
      }
    }
    case "withdraw": {
      if (staked === 0) {
        return "Nothing to withdraw";
      } else if (!inputMakesSense) {
        return "Enter an amount to withdraw first";
      } else if (inputAmount! > staked) {
        return "You are trying to withdraw more than you have staked";
      } else {
        return "";
      }
    }
    case "withdrawall": {
      if (staked === 0) {
        return "You don't have anything staked";
      } else {
        return "";
      }
    }
    case "claim": {
      if (rewards.tokens === 0) {
        return "No rewards to claim";
      } else {
        return `Claim $${rewards.USDRewards}`;
      }
    }
    case "exit": {
      if (staked === 0 && rewards.tokens === 0) {
        return "There is nothing for you to exit with";
      } else {
        return "Exit will claim your rewards and stakes";
      }
    }
    case "max": {
      if (poolsClosed) {
        return "Pool has finished.";
      } else if (tokenAmount > 0) {
        return tokenAmount.toString();
      } else {
        return "You do not have anything to stake";
      }
    }
    case "boost-amount": {
      return `Your multiplier is ${((multiplier! - 1) * 100).toFixed(
        0
      )}%. That means the yield is multiplied by ${multiplier}`;
    }
    case "boost": {
      const multiPercentage = ((multiplier! - 1) * 100).toFixed(0);
      if (!boostTokenAmount) {
        return "You do not have any boosting tokens.";
      }
      if (boostCost && boostAmount) {
        if (boostTokenAmount < boostCost) {
          return `You're missing ${boostCost} boosting tokens.`;
        } else {
          return `Increase your multiplier of ${multiPercentage}% by ${boostAmount}`;
        }
      } else {
        return `Your multiplier is ${multiPercentage}%. That means the yield is multiplied by ${multiplier}`;
      }
    }
  }
};
