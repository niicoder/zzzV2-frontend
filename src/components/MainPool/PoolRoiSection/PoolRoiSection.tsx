import React, { memo } from "react";
import { RoiSection } from "./PoolRoiSection.styles";

type Props = {
  displayYields: boolean;
  weeklyROI: number | null;
  yearlyROI: number | null;
  weeklyUSD: number | null;
};

function PoolRoiSection({
  displayYields,
  weeklyROI,
  yearlyROI,
  weeklyUSD,
}: Props) {
  return (
    <RoiSection>
      <div className="roi-title">ROI</div>
      <div className="roi-entry">
        week{" "}
        <span className="roi-amount">
          {" "}
          {displayYields && weeklyROI ? `${weeklyROI.toFixed(2)}%` : `N/A`}{" "}
          {weeklyUSD !== 0 && weeklyUSD && `($${weeklyUSD.toFixed(2)})`}
        </span>
      </div>
      <div className="roi-entry">
        year{" "}
        <span className="roi-amount">
          {" "}
          {displayYields && yearlyROI ? `${yearlyROI.toFixed(2)}%` : `N/A`}{" "}
          {weeklyUSD !== 0 && weeklyUSD && `($${(weeklyUSD * 52).toFixed(2)})`}
        </span>
      </div>
    </RoiSection>
  );
}
export default memo(PoolRoiSection);
