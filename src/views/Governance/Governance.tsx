import img_join_convo from "assets/join_convo.png";
import img_governance from "assets/justice.png";
import Layout from "components/Layout";
import React from "react";
import {
  GovernanceContent,
  GovernanceJoin,
  GovernanceProposal,
  GovernanceTitle,
} from "views/Governance/Governance.styles";

const title = "Vote on the future of ZZZ";
const subtitle = "You voted 0 times this week.";

type Props = {};

const proposals = [
  {
    id: 1,
    title: "ZZZ-1",
    desc: "Example subject",
    hours: "00:00:00",
    remaining: "0",
    yes: 0,
    no: 0,
    total: 0,
  },
  {
    id: 2,
    title: "ZZZ-2",
    desc: "Example subject",
    hours: "00:00:00",
    remaining: "0",
    yes: 0,
    no: 0,
    total: 0,
  },
  {
    id: 3,
    title: "ZZZ-3",
    desc: "Example subject",
    hours: "00:00:00",
    remaining: "0",
    yes: 0,
    no: 0,
    total: 0,
  },
  { id: 4, title: "ZIP-4", desc: "Lorem ipsum" },
  { id: 5, title: "ZIP-5", desc: "Lorem ipsum" },
  { id: 6, title: "ZIP-6", desc: "Lorem ipsum" },
  { id: 7, title: "ZIP-7", desc: "Lorem ipsum" },
  { id: 8, title: "ZIP-8", desc: "Lorem ipsum" },
  { id: 9, title: "ZIP-9", desc: "Lorem ipsum" },
  { id: 10, title: "ZIP-10", desc: "Lorem ipsum" },
  { id: 11, title: "ZIP-11", desc: "Lorem ipsum" },
  { id: 12, title: "ZIP-12", desc: "Lorem ipsum" },
  { id: 13, title: "ZIP-13", desc: "Lorem ipsum" },
  { id: 14, title: "ZIP-14", desc: "Lorem ipsum" },
  { id: 15, title: "ZIP-15", desc: "Lorem ipsum" },
];
const amountPerPage = 3;
const tabs = new Array(Math.ceil(proposals.length / amountPerPage)).fill(0);

function Governance({}: Props) {
  const [startIndex, setStartIndex] = React.useState(0);
  const currentIndex = startIndex * amountPerPage;

  return (
    <Layout view="Governance" type="vertical">
      <Layout.ExtraGovernanceContent>
        <GovernanceTitle>
          <div>
            <div id="title">{title}</div>
            <div id="subtitle">{subtitle}</div>
          </div>
        </GovernanceTitle>
      </Layout.ExtraGovernanceContent>
      <Layout.MainContent>
        <GovernanceContent>
          <div className="placeholder">COMING SOON &trade;</div>
          <div className="container">
            <div className="main-content">
              {proposals
                .slice(currentIndex, currentIndex + amountPerPage)
                .map((proposal) => (
                  <GovernanceProposal>
                    <div className="proposal">
                      <div className="proposal-left">
                        <div className="proposal-title">
                          <span className="proposal-id">{proposal.title}:</span>
                          <div className="proposal-desc">{proposal.desc}</div>
                        </div>
                        <div className="proposal-buttons">
                          <button className="yes">Yes</button>
                          <button className="no">No</button>
                          <button className="read-more">Read More</button>
                        </div>
                      </div>
                      <div className="proposal-right">
                        <div className="proposal-countdown">
                          {proposal.hours}
                          <span className="proposal-remaining">
                            {proposal.remaining} Hours to vote
                          </span>
                        </div>
                        <p className="proposal-remaining"></p>
                        <div className="proposal-vote-results">
                          <p className="proposal-vote-tally">
                            {proposal.yes} Yes / {proposal.no} No
                          </p>
                          <div className="proposal-vote-bar"></div>
                        </div>
                      </div>
                    </div>
                  </GovernanceProposal>
                ))}
              <div className="tabs">
                {tabs.map((tab, index) => (
                  <div className="tab" onClick={() => setStartIndex(index)}>
                    {index === startIndex ? (
                      <div className="page selected"></div>
                    ) : (
                      <div className="page"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="side-content">
              <div className="image">
                <img src={img_governance} alt="zzz-governance" />
              </div>
              <GovernanceJoin>
                <div className="title">Join the conversation</div>
                <div className="join">
                  <div className="join-text">
                    Before a proposal goes to the ZZZ Parliament, it's debated
                    in the Town Square.
                  </div>
                  <img src={img_join_convo} alt="zzz-join_convo" />
                </div>
                <button className="join-button">Discuss</button>
              </GovernanceJoin>
            </div>
          </div>
        </GovernanceContent>
      </Layout.MainContent>
    </Layout>
  );
}
export default Governance;
