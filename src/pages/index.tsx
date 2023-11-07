import Link from "next/link";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import ArticleLayout from "@/layouts/ArticleLayout";
import { FeatureComparisonTable } from "@/components/tables/feature-comparison";

export default function Home() {
  return (
    <GlobalLayout>
      <ArticleLayout>
        <h1>Charts POC</h1>

        <Link href="/security">
          Go to demo stock page to see line series comparisons.
        </Link>
        <h2>Highcharts 🥇</h2>
        <p>
          <strong>Highcharts</strong> comes with a lot of different chart types
          and is widely used and suggested. See the{" "}
          <Link href="/security/1/report-builder?variant=hc">
            Highcharts Report builder example
          </Link>
          . Although not free, this is the best general purpose charting library
          available to us.
        </p>
        <h2>Trading View</h2>
        <p>
          <strong>Trading View</strong> offers a few different products,
          primarily focused around trading. The open-source library they provide
          is called{" "}
          <Link href="https://www.tradingview.com/lightweight-charts/">
            Lightweight Charts
          </Link>
          . It&apos;s a good library, but it&apos;s only for series type charts.
          It&apos;s not a general purpose charting library. See the{" "}
          <Link href="/security/1/report-builder">
            Lightweight Charts report builder example
          </Link>
          . We have the option of using this for free (with attribution) in
          conjunction with a general purpose charting library.
        </p>
        <h2>
          <s>Chart.js</s>
        </h2>
        <p>
          <strong>Chart.js</strong> struggles with large datasets which pretty
          much making it a non-starter imo. See the{" "}
          <Link href="/security/1/report-builder?variant=cjs">
            Chart.js report builder example
          </Link>{" "}
          , it&apos;s pretty bad.
        </p>
        <h2>Plotly</h2>
        <p>
          <strong>Plotly</strong> has a large variety of chart types and is
          pretty widely used, and obviously we use it today. See the{" "}
          <Link href="/security/1/report-builder?variant=plotly">
            Plotly Report builder example
          </Link>
          . Plotly is also free, but I find it to be clunky and not super
          visually appealing. I think we can do better and our users deserve
          better. Plotly.js is also 1.1mb minified and gzipped, which is
          gigantic.
        </p>
        <h2>Ag Grid Standalone Charts</h2>
        <p>
          <strong>AgGrid Standalone Charts</strong> offers a small suite of
          charts that are free to use. See the
          <Link href="/security/1/report-builder?variant=ag">
            AgGrid Standalone Charts Report builder example
          </Link>
          . The line and area series that we tested both look good and have good
          performance. The one downside is just lack of support for other chart
          types.
        </p>
        <h2>Other Comparisons</h2>
        <FeatureComparisonTable id={1}></FeatureComparisonTable>
      </ArticleLayout>
    </GlobalLayout>
  );
}
