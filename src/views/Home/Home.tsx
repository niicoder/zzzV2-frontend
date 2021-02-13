import discordIcon from "assets/discord_logo.webp";
import dreamtokenIcon from "assets/dream_token_icon.png";
import forumsIcon from "assets/forums_logo.png";
import mediumIcon from "assets/medium_icon.webp";
import telegramIcon from "assets/telegram_logo.webp";
import certiklogo from "assets/certik.png";
import cryptouniversity from "assets/cryptouniversity.png";
import twitterIcon from "assets/twitter_icon.svg";
import Layout from "components/Layout";
import Newsfeed from "components/Newsfeed/Newsfeed";
import PoolPreviewContainer from "components/PoolPreviewContainer/PoolPreviewContainer";
import SocialLink from "components/SocialLink";
import { SocialLinks } from "components/SocialLink/SocialLink.styles";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import zzzlogo from "assets/zzz_token_logo.png";

import { CommunitySVG, NapSVG, PartnerSVG } from "svg/HomeIcons";
import {
  Certik,
  HomeContent,
  HomeTitle,
  InfoBox,
  InfoBoxes,
  TextContainers,
} from "./Home.styles";

let i = 0;
const title =
  "Decentralized finance reimagined. For the people, by the people.";

function typeWriter(setTyped: Function) {
  if (i < title.length) {
    const el = document.getElementById("title");
    if (el) {
      el.innerHTML += title.charAt(i);
      i++;
    }
    setTimeout(() => typeWriter(setTyped), 20);
  } else {
    setTyped(true);
  }
}

const infoBoxes = [
  {
    title: "Community First",
    text:
      "The protocol is determined by the community. Proposals are made by and voted by holders of ZZZ / NAP.",
    icon: <CommunitySVG />,
    color: "#138d75",
  },
  {
    title: "NAP Token",
    text:
      "NAP is the an extra layer for the economy. It act's as a gas token in the system. It can be spent to increase your yields by the Boost functionality. Revenues from purchases are halved 50% towards future products and 50% towards development fund.",
    icon: <NapSVG />,
    color: "#F5CBA7",
  },
  {
    title: "Partnerships",
    text:
      "ZZZ is committed to continuing innovations with other Ethereum projects.",
    icon: <PartnerSVG />,
    color: "#370a42",
  },
];

type Props = {};
function Home({}: Props) {
  const [typed, setTyped] = useState(false);
  useEffect(() => {
    typeWriter(setTyped);
  }, []);

  return (
    <Layout view="Home" type="vertical">
      <Layout.ExtraContent>
        <HomeTitle>
          <div id="title">{typed && title}</div>
          <SocialLinks>
            <SocialLink
              title="Telegram"
              icon={telegramIcon}
              href="https://t.me/ZZZfinance/"
            />
            <SocialLink
              title="Twitter"
              icon={twitterIcon}
              href="https://twitter.com/zzzfinance/"
            />
            <SocialLink
              title="Medium"
              icon={mediumIcon}
              href="https://medium.com/@zzzfinance/"
            />
            <SocialLink
              title="Discord"
              icon={discordIcon}
              href="https://discord.gg/DQXmtB3"
            />
            <SocialLink
              title="Forums"
              icon={forumsIcon}
              href="https://forums.zzz.finance/"
            />
            <SocialLink
              color="#eee"
              style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
              title="Crypto University"
              icon={cryptouniversity}
              href="https://www.cryptouniversity.co.za/"
            />
          </SocialLinks>
        </HomeTitle>
      </Layout.ExtraContent>
      <Layout.MainContent>
        <HomeContent>
          <TextContainers>
            <div className="info">
              <img
                src={zzzlogo}
                alt="zzz"
                style={{
                  width: "18%",
                  height: "auto",
                  backgroundColor: "#eee",
                  borderRadius: "100px",
                  padding: "25px",
                  border: "2px solid black",
                }}
              />
              <h2>What is ZZZ?</h2>
              <p>
                ZZZ is a community-centered DeFi project by the people, for the
                people. The decisions and actions of ZZZ are made by its members
                and community to assure equity and fairness for all. <br />
                All started by a single developer and now the project is handed
                to the community to grow forwards.
              </p>
              <p>
                It is a new form of governance system. A think-tank. A place
                where innovation, entrepreneurship, and technological
                advancements are the priority, creating a much needed utility
                focus to the blockchain space. The value of ZZZ is determined by
                the contribution and innovation of the community as a whole.
              </p>
              <h2>Why ZZZ?</h2>
              <p>
                Owning <b>$ZZZ</b> enables your voice to be heard regarding the
                future of the project in proposal voting and proposal
                initiation.
              </p>
              <p>
                Proposal initiation and voting will be avalaible in the near
                future using a snapshotting system. A gas-relayer system where
                users pay no fees is coming later.
              </p>
              <p>
                Owning ZZZ provides you with unique bonuses on our DeFi-platform
                by providing your deposited assets with a yield bonus according
                to the amount of ZZZ you are holding. So you are gaining the
                upper hand.
              </p>
              <h2>Okay, anything more?</h2>
              <p>
                Very important part of the ZZZ ecosystem is it's{" "}
                <b>collaborations</b> with other projects in the space.
              </p>
              <p>
                Our audience knows we keep introducing new projects which meet a
                certain criteria to them through our DeFi-platform or other form
                of collaborations.
              </p>
              <p>
                We are able to provide a platform for established and newcoming
                projects and leverage our audience combined with our expertise
                to achieve greater results together rather than trying to
                compete against each others.
              </p>
              <h2>Tokenomics</h2>
              <p>
                A total amount of <b>20,000 $ZZZ</b> has been distributed to the
                community, there was no presale or dev or VC wallets.
              </p>
              <p>
                A total amount of <b>20,000,000 $NAP</b> has been created to
                fuel the ecosystem and it's development.
              </p>
              <p>
                A dynamic supply of <b>$DREAM</b> has been created for further
                use cases including a gamifying-experience
              </p>

              <div className="buy-links">
                <SocialLink
                  title="Get ZZZ"
                  color="#283747"
                  style={{
                    padding: "30px",
                  }}
                  href="https://uniswap.info/pair/0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a"
                  iconType="emoji"
                  icon="💤"
                  iconStyle={{
                    fontSize: "20px",
                    marginTop: "10px",
                  }}
                />
                <SocialLink
                  title="Get NAP"
                  color="#E67E22"
                  style={{
                    padding: "45px",
                  }}
                  href="https://uniswap.info/pair/0x0de0322d3ac0d5002e2bc9c3a188728728d90799"
                  iconType="emoji"
                  icon="😪"
                  iconStyle={{
                    fontSize: "20px",
                    marginTop: "10px",
                  }}
                />
                <SocialLink
                  title="Get DREAM"
                  color="#BB8FCE"
                  style={{
                    padding: "30px",
                  }}
                  href="https://uniswap.info/pair/0x19b3de48392778f8e6ef332fee002aa5e15fe41a"
                  icon={dreamtokenIcon}
                  iconStyle={{
                    borderRadius: "50px",
                    border: "2px solid white",
                  }}
                />
              </div>
            </div>
            <Newsfeed />
          </TextContainers>
          <InfoBoxes>
            {infoBoxes.map((box) => (
              <InfoBox key={`infobox-${box.title}`} color={box.color}>
                <div className="icon">{box.icon}</div>
                <div className="title">{box.title}</div>
                <div className="explanation">{box.text}</div>
              </InfoBox>
            ))}
          </InfoBoxes>
          <Certik>
            <img src={certiklogo} alt="certik" className="certik-logo" />
            <div className="certik-text">
              <h2>What?</h2>
              <p>
                We have just completed an audit process with CertiK for our
                yield farming contracts. After a few revisions all major and
                critical issues found by CertiK were alleviated and the
                finalized report has been received and our pools have been
                implemented with this standard for quite some time.
              </p>
              <h2>Why?</h2>
              <p>
                We found it necessary to provide a proof of authenticity for our
                partners and investors and we are determined to keep the
                standars up for all upcoming projects.
              </p>
              <h2>CertiK?</h2>
              <p>
                We have chosen CERTIK as they are a trusted and reputable brand
                with unrivalled expertise in the quality of conducting extensive
                and efficient code auditing. Our community deserves nothing but
                the best, and quality polished code is paramount to that.
              </p>
            </div>
            <a
              href="https://medium.com/zzzfinance/certik-completes-audit-of-zzz-smart-contracts-c925ae8786d"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Read into it
            </a>
          </Certik>
          <h2 style={{ textAlign: "center" }}>Ongoing farms</h2>
          <PoolPreviewContainer showLink={true} />
        </HomeContent>
      </Layout.MainContent>
    </Layout>
  );
}
export default observer(Home);
