import React, { useEffect } from "react";
type Props = {};

declare global {
  interface Window {
    twttr: any;
  }
}
window.twttr = window.twttr || {};

function Newsfeed({}: Props) {
  useEffect(() => {
    if (window?.twttr?.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <a
      className="twitter-timeline"
      data-width="400"
      data-height="600"
      href="https://twitter.com/zzzfinance?ref_src=twsrc%5Etfw"
    >
      Loading...
    </a>
  );
}
export default Newsfeed;
