import styled from "styled-components";

export const HomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70vw;
  min-height: 178px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5vh;
  color: #f8f9f9;
  font-size: 45px;
  font-weight: bold;
  line-height: 1.5;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin-right: auto;
    margin-left: auto;
    font-size: 35px;
    line-height: 1.2;
  }
`;
export const Certik = styled.div`
  background-color: rgba(2, 27, 49, 0.85);
  color: #eee;
  width: 60%;
  margin-top: 28px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 75%;
    height: auto;
  }
  .certik-text {
    font-size: 16px;
    font-weight: bold;
    padding: 10px 120px;
  }

  a {
    border-radius: 8px;
    color: white;
    font-weight: bold;
    font-size: 21px;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 8px 14px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    img {
      width: 100%;
    }
    .certik-text {
      padding: 10px 16px;
    }
  }
`;

export const HomeContent = styled.div`
  width: 75vw;
  margin-left: auto;
  margin-right: auto;

  p {
    text-align: left;
    margin-left: 30px;
    margin-right: 30px;
  }

  .buy-links {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoBoxes = styled.div`
  display: flex;
  align-items: space-evenly;
  justify-content: space-evenly;
  margin-top: 2.5em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

type InfoBoxProps = {
  color: string;
};

export const InfoBox = styled.div<InfoBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;

  .icon {
    position: relative;
    background-color: ${(props) => props.color};
    border: 2px solid #0b5345;
    border-radius: 150px;
    width: 150px;
    height: 150px;
    background-color: ;

    svg {
      position: absolute;
      bottom: 15px;
      left: 10px;
    }
  }

  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .explanation {
    text-align: center;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

export const TextContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 80vw;

  .info {
    box-shadow: 2px 2px 5px -2px rgba(140, 140, 140, 1);
    margin: 0 14px;

    background-color: rgba(57, 58, 125, 0.15);
    padding: 14px 80px;
    border-radius: 10px;
    text-align: center;
    line-height: 1.6;
    width: 50vw;
    margin: 0 14px;
    @media (max-width: 1280px) {
      width: 400px;
    }

    @media (max-width: 480px) {
      width: 90%;
    }
  }

  @media (max-width: 1280px) {
    max-width: 100vw;
    flex-direction: column;
    align-items: center;
    .info {
      margin: 14px 0;
      margin-left: 4px;
    }
  }

  a {
    color: black;
  }
`;
