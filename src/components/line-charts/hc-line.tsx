import Highcharts from "highcharts";
import { useEffect } from "react";

type Series = {
  label: string;
  data: number[][];
};

type Props = {
  series: Series[];
  legend?: boolean;
};

export const HCLineSeries = ({ series, legend = false }: Props) => {
  useEffect(() => {
    const chart = Highcharts.chart("chart", {
      chart: {
        zooming: {
          type: "x",
        },
        style: {
          fontFamily: "Montserrat",
        },
      },
      title: {
        text: "",
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
        enabled: legend,
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

      series: series.map((series) => ({
        type: "line",
        name: series.label,
        data: series.data,
      })),
    });

    return () => {
      chart.destroy();
    };
  }, [series]);

  return <div id="chart" className="w-full h-full"></div>;
};
