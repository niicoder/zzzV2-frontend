import PoolInfo from "components/PoolInfo/PoolInfo";
import React, { useState } from "react";
import Modal from "react-modal";
import { Pool, PoolCategory } from "types";
import { Header, PartnerModalStyles } from "./PoolHeaderSection.styles";

type Props = {
  pool: Pool;
  userStaked: number;
  totalStaked: number;
  tooltipBoost?: string | null;
  userPercentageOfTotal: number;
  multiplier: number;
};

Modal.setAppElement("#root");

function PoolHeaderSection({
  pool,
  userStaked,
  totalStaked,
  userPercentageOfTotal,
  tooltipBoost,
  multiplier,
}: Props) {
  const [poolInfoModalOpen, setIsPoolInfoModalOpen] = useState(false);
  const { token, partnerName, poolIcon, category, purchaseFrom } = pool;

  return (
    <Header>
      <a
        className="header-text buy-button"
        href={purchaseFrom}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get {token.name}
      </a>
      {category === PoolCategory.Partners && (
        <div
          className="header-text buy-button"
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => setIsPoolInfoModalOpen(true)}
        >
          What is {partnerName}
        </div>
      )}
      <div className="header-text">
        staked {userStaked || 0} / {totalStaked.toFixed(2)} {token.name}{" "}
        {userPercentageOfTotal
          ? `(${userPercentageOfTotal.toFixed(2)}%)`
          : "(0%)"}
      </div>
      <div className="header-text" data-tip={tooltipBoost}>
        boost {((multiplier! - 1) * 100).toFixed(0)}%
      </div>
      <Modal
        isOpen={poolInfoModalOpen}
        onRequestClose={() => setIsPoolInfoModalOpen(false)}
        contentLabel="Pool Info"
        style={PartnerModalStyles}
      >
        {partnerName && (
          <PoolInfo partnerName={partnerName} poolIcon={poolIcon} />
        )}
      </Modal>
    </Header>
  );
}
export default PoolHeaderSection;
