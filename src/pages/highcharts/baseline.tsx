import { GlobalLayout } from "@/layouts/GlobalLayout";
import Highcharts from "highcharts";
import ibmDaily from "../../../public/data/securities/ibm/daily.json";
import { useEffect } from "react";

const data = Object.entries(ibmDaily["Time Series (Daily)"]).map(
  ([key, value]) => {
    return [new Date(key).getTime(), Number(value["4. close"])];
  }
);

const timeAscData = data.reverse();

export default function Baseline() {
  useEffect(() => {
    const chart = Highcharts.chart("chart", {
      chart: {
        zooming: {
          type: "x",
        },
        width: window.innerWidth,
        height: window.innerHeight,
      },
      title: {
        text: "IBM Daily",
        align: "center",
      },
      subtitle: {
        text:
          document.ontouchstart === undefined
            ? "Click and drag in the plot area to zoom in"
            : "Pinch the chart to zoom in",
        align: "center",
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Close Price",
        },
      },
      legend: {
        enabled: true,
      },
      plotOptions: {
        area: {
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },

      series: [
        {
          type: "line",
          name: "IBM Daily",
          data: timeAscData,
        },
      ],
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <GlobalLayout>
      <div id="chart"></div>
    </GlobalLayout>
  );
}
