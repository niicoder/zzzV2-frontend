import styled from "styled-components";

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  .pool-icon {
    font-size: 50px;
    flex: 1;
    line-height: 50px;
    max-width: 100px;
  }

  .pool-name {
    font-weight: bold;
    font-size: 22px;
    flex: 2;
  }
  .pool-info {
    font-size: 12px;
    font-weight: bold;
    flex: 2;
  }

  .pool-balance {
    font-size: 12px;
    span {
      font-weight: bold;
      color: #60db97;
      margin-left: 4px;
    }
  }

  @media (max-width: 768px) {
    .pool-icon {
      font-size: 35px;
    }
  }
`;
