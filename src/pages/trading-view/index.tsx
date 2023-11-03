import ArticleLayout from "@/layouts/ArticleLayout";
import { GlobalLayout } from "@/layouts/GlobalLayout";

export default function TradingView() {
  return (
    <GlobalLayout>
      <ArticleLayout>
        <h1>TradingView</h1>
        <h2>License and attribution</h2>
        <p>
          The Lightweight Charts™ license requires specifying TradingView as the
          product creator.
        </p>
        <p>
          You shall add the "attribution notice" from the NOTICE file and a link
          to https://www.tradingview.com/ to the page of your website or mobile
          application that is available to your users.
        </p>
        <p>
          As thanks for creating Lightweight Charts™, we'd be grateful if you
          add the attribution notice in a prominent place.
        </p>
      </ArticleLayout>
    </GlobalLayout>
  );
}
