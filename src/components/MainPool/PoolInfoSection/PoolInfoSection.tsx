import Timer from "components/Timer/Timer";
import { isBugged } from "helpers/utils";
import React from "react";
import { Pool, PoolStatus } from "types";
import { InfoSection } from "./PoolInfoSection.styles";

type Props = {
  pool: Pool;
  userTokenAmount?: number;
};
function PoolInfoSection({ pool, userTokenAmount }: Props) {
  const { poolStatus, name, poolIconType, poolIcon, info, token } = pool;
  return (
    <InfoSection>
      {!isBugged(pool) && poolStatus === PoolStatus.Ongoing && (
        <Timer pool={pool} />
      )}
      <div className="pool-name">{name}</div>
      {poolIconType ? (
        <img
          className="pool-icon"
          src={poolIcon}
          alt={name}
          style={{ width: "25%", height: "25%" }}
        />
      ) : (
        <span role="img" className="pool-icon" aria-label="icon">
          {poolIcon}
        </span>
      )}

      <div className="pool-info">{info}</div>
      <div className="pool-balance">
        wallet:{" "}
        {userTokenAmount !== undefined && (
          <span>
            {userTokenAmount.toFixed(7)} {token.name}
          </span>
        )}
      </div>
    </InfoSection>
  );
}
export default PoolInfoSection;
