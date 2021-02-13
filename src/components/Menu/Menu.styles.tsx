import styled from "styled-components";

type LinkProps = {
  isActive: boolean;
};

export const MenuContainer = styled.div`
  position: absolute;
  top: 2vw;
  left: 2vw;
  border-radius: 25px;
  height: 80vh;
  margin-top: auto;
  margin-bottom: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
  box-shadow: 3px 0px 30px -7px rgba(140, 140, 140, 1);
  z-index: 999;
  img {
    width: 65px;
    transform: rotate(-12deg);
    padding: 15px;
    margin-bottom: 15px;
    transition: all 1s;
    :hover {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1024px) {
    position: initial;
    line-height: 1.2;
    border-radius: 0;
    flex-direction: row;
    flex: 0.5;
    height: 10vh;
    align-items: center;
  }
`;

export const LinkContainer = styled.div<LinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;

  a {
    svg {
      width: 25px;
      fill: ${(props) => (props.isActive ? "white" : "#aaaaaa")};
      :hover {
        color: white;
      }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: ${(props) => (props.isActive ? "white" : "#aaaaaa")};
    text-decoration: none;
  }

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    line-height: 1.2;
    border-radius: 0;
    font-size: 15px;
    margin-bottom: 0;
    margin-left: 5px;

    a {
      padding: 3px;
      svg {
        fill: ${(props) => (props.isActive ? "white" : "#aaaaaa")};
        width: 20px;
      }
      color: ${(props) => (props.isActive ? "white" : "#aaaaaa")};
    }
  }
`;
