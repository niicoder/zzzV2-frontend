import React, { useEffect, useState } from "react";
import { TimerData, Pool } from "types";
import EthStore from "stores/eth";
import { observer } from "mobx-react";
import Spinner from "components/Spinner/Spinner";
import { ethers } from "ethers";
import { getTimeRemaining, poolRetiredOrClosed } from "helpers/utils";
import "./Timer.scss";

type Props = {
  pool: Pool;
};

function Timer({ pool }: Props) {
  const [poolTimeRemaining, setPoolTimeRemaining] = useState<TimerData | null>(
    null
  );
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const contract = new ethers.Contract(
        pool.address,
        pool.abi,
        EthStore.provider
      );
      const periodFinish = await contract.periodFinish();
      const endTime = new Date(periodFinish * 1000);
      setLoading(false);
      setEndTime(endTime);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (endTime) {
      const timer = setInterval(() => {
        setPoolTimeRemaining(getTimeRemaining(endTime));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [endTime]);

  if (!poolTimeRemaining || loading) {
    return (
      <Spinner
        width={18}
        height={18}
        type="ThreeDots"
        condition={!!poolTimeRemaining}
      />
    );
  }

  if (
    (poolTimeRemaining && poolTimeRemaining.seconds < 0) ||
    poolRetiredOrClosed(pool)
  ) {
    return <div className="time-remaining">Rewards finished!</div>;
  }

  return (
    <div className="time-remaining">
      <div className="pool-time-remaining">
        <div className="times">
          <span role="img" aria-label="clock">
            ⏰
          </span>
          <span>
            {poolTimeRemaining!.days}d {poolTimeRemaining!.hours}h{" "}
            {poolTimeRemaining!.minutes}m {poolTimeRemaining!.seconds}s{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default observer(Timer);
