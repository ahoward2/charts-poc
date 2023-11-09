import { lineColors } from "@/lib/securities/builder";
import Chart from "chart.js/auto";
import { useEffect } from "react";
Chart.defaults.font.family = "Montserrat";

type Series = {
  label: string;
  data: {
    time: string;
    value: number;
  }[];
};

type Props = {
  series: Series[];
  id?: string;
  legend?: boolean;
};

export const CJSLineSeries = ({
  series,
  id = "chart-canvas",
  legend = false,
}: Props) => {
  useEffect(() => {
    const ctx = document.getElementById(id) as HTMLCanvasElement;
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: series[0].data.map((item) => item.time),
        datasets: series.map((serie, index) => ({
          label: serie.label,
          data: serie.data.map((item) => item.value),
          borderColor: lineColors[index],
          backgroundColor: lineColors[index],
          tension: 0.1,
          pointStyle: false,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: legend,
          },
          title: {
            display: false,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [series]);

  return (
    <div id="chart" className="w-full h-full m-auto relative">
      <canvas id={id}></canvas>
    </div>
  );
};
