import { lineColors } from "@/lib/securities/builder";
import { IChartApi, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

type Series = {
  label: string;
  data: {
    time: string;
    value: number;
  }[];
};

type Props = {
  id?: string;
  series: Series[];
  legend?: boolean;
};

export const TVLineSeries = ({
  id = "chart",
  series,
  legend = false,
}: Props) => {
  useEffect(() => {
    const chart = createChart(id, {
      autoSize: true,
      layout: {
        fontFamily: "Montserrat",
      },
    });

    window.addEventListener("resize", () => {
      if (chart) {
        chart.applyOptions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    });

    series.forEach((series, index) => {
      const lineSeries = chart.addLineSeries({
        color: lineColors[index],
      });
      lineSeries.setData(series.data);
    });

    chart.timeScale().fitContent();

    return () => {
      window.removeEventListener("resize", () => {
        if (chart) {
          chart.applyOptions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      });
      chart.remove();
    };
  }, [series]);

  return (
    <div id={id} className="w-full h-full px-2">
      {legend && (
        <div id="legend" className="flex">
          {series.map((series, index) => (
            <div key={series.label} className="px-1 text-sm w-fit">
              <span style={{ color: lineColors[index] }}>{series.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
