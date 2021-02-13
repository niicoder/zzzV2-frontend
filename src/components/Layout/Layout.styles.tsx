import styled from "styled-components";
import url from "assets/pools_bg.svg";
import academy_bg from "assets/academy_bg2.png";

type ContainerProps = {
  type?: "horizontal" | "vertical";
  view?: string;
  backgroundColor?: string;
};

export const FlexContainer = styled.div<ContainerProps>`
  display: flex;
  background: ${(props) =>
    props.view === "Pools"
      ? "linear-gradient(90deg, #cbcde5 12%, #f8f9f9 50%)"
      : "#f8f9f9"};
  flex-direction: ${(props) =>
    props.type === "horizontal" ? "row" : "column"};
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: ${(props) => props.view === "Pools" && "column-reverse"};
  }
`;

export const MainContent = styled.div<ContainerProps>`
  padding: 1em;
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || undefined};
  background: ${(props) => props.view === "learn" && `url(${academy_bg})`};
  background-size: cover;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ExtraContent = styled.div<ContainerProps>`
  background-color: ${(props) => (props.color ? props.color : "#021b31")};
  flex: ${(props) => (props.view === "Pools" ? "0.4" : "1")};
  background-image: ${(props) => props.view === "Pools" && `url(${url})`};
  background-repeat: no-repeat;
  :before {
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      white 13px
    );
  }

  :after {
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      white 12px,
      transparent 13px
    );
  }

  @media (max-width: 1024px) {
    flex: 0;
  }
`;

export const ExtraLearnContent = styled.div<ContainerProps>`
  background-color: #0984e3;
  :before {
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      white 13px
    );
  }

  :after {
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      white 12px,
      transparent 13px
    );
  }
`;

export const ExtraGovernanceContent = styled.div<ContainerProps>`
  background-color: #fff;
  :before {
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      white 13px
    );
  }

  :after {
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      white 12px,
      transparent 13px
    );
  }
`;
