export type Pool = {
  id: string;
  name: string;
  address: string;
  abi: string;
  poolIcon: any;
  token: Token;
  boostToken?: Token;
  reward: Token;
  rewardTokenPair: Token;
  uniPairToken: Token;
  uniPairToken2?: Token;
  poolStatus: PoolStatus;
  uniToken: Token;
  poolType: PoolType;
  info: string;
  purchaseFrom: string;
  burst?: boolean;
  category: PoolCategory;
  boostLevels?: BoostLevel[];
  poolIconType?: PoolIconType;
  statusText?: string;
  usesNewAbi?: boolean;
  partnerName?: string;
};

export type BoostLevel = {
  level: number;
  percentage: string;
};

export type UserPoolData = {
  id: string;
  staked: number;
  multiplier?: number;
  boostLevel?: number;
  rewards: {
    tokens: number;
    USDRewards: number;
  };
  hasAllowance: boolean;
  hasBoostAllowance?: boolean;
  tokenAmount: number;
  boostTokenAmount?: number;
  boostCosts?: number[];
};

export type TimerData = {
  total: any;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type BasePoolData = {
  name: string;
  staked: number;
  underlyingTokens: UnderlyingTokens;
  TVL: number;
  APY: any;
  icon: any;
  id: string;
  stakingToken: Token;
};

export type LoaderTypes =
  | "Audio"
  | "BallTriangle"
  | "Bars"
  | "Circles"
  | "Grid"
  | "Hearts"
  | "Oval"
  | "Puff"
  | "Rings"
  | "TailSpin"
  | "ThreeDots"
  | "Watch"
  | "RevolvingDot"
  | "Triangle"
  | "Plane"
  | "MutatingDots"
  | "None"
  | "NotSpecified";

export type UnderlyingTokens = {
  token1: number;
  token2?: number;
};

export enum PoolType {
  LP = 1,
  SingleToken,
  SingleTokenLPOutput,
  Multi,
}

export enum PoolCategory {
  ZZZ = 1,
  Partners,
  Retired,
}

export enum PoolIconType {
  Emoji = 1,
  Image,
}

export enum PoolStatus {
  Incoming = 0,
  Ongoing,
  Retired,
  Closed,
}

export type Token = {
  name: string;
  address: string;
  abi: string;
  decimals: number;
  isLPToken?: boolean;
};

export type Yields = {
  weeklyROI: any;
  dailyROI: any;
  yearlyROI: any;
  rewardPerToken: any;
};
