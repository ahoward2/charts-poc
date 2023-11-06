import Link from "next/link";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import ArticleLayout from "@/layouts/ArticleLayout";

export default function Home() {
  return (
    <GlobalLayout>
      <ArticleLayout>
        <h1>Charts POC</h1>

        <Link href="/security">
          Go to demo stock page to see line series comparisons.
        </Link>

        <h2>General Findings</h2>
        <p>
          <strong>Trading View</strong> is a pretty cool library. The
          open-source library they provide is called{" "}
          <Link href="https://www.tradingview.com/lightweight-charts/">
            Lightweight Charts
          </Link>
          . It&apos;s a good library, but it&apos;s only for series type charts.
          It&apos;s not a general purpose charting library. See the{" "}
          <Link href="/security/1/report-builder">
            Lightweight Charts report builder example
          </Link>
          . The entire library is less than 50kb which is pretty impressive.
        </p>
        <p>
          <strong>Chart.js</strong> struggles with large datasets pretty much
          making it a non-starter imo. See the{" "}
          <Link href="/security/1/report-builder?variant=cjs">
            Chart.js report builder example
          </Link>{" "}
          , it&apos;s pretty bad.
        </p>
        <p>
          <strong>Highcharts</strong> comes with a lot of different chart types
          and is pretty widely used and suggested. See the{" "}
          <Link href="/security/1/report-builder?variant=hc">
            Highcharts Report builder example
          </Link>
        </p>
        <p>
          <strong>Plotly</strong> has a lot of different chart types and is
          pretty widely used, and obviously we use it today. See the{" "}
          <Link href="/security/1/report-builder?variant=plotly">
            Plotly Report builder example
          </Link>
          .
        </p>
      </ArticleLayout>
    </GlobalLayout>
  );
}
