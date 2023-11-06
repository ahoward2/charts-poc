import { lineColors } from "@/lib/securities/builder";
import { createChart } from "lightweight-charts";
import { useEffect } from "react";

type Series = {
  label: string;
  data: {
    time: string;
    value: number;
  }[];
};

type Props = {
  series: Series[];
  legend?: boolean;
};

export const TVLineSeries = ({ series, legend = false }: Props) => {
  useEffect(() => {
    const chart = createChart("chart", {
      autoSize: true,
    });

    series.forEach((series, index) => {
      const lineSeries = chart.addLineSeries({
        color: lineColors[index],
      });
      lineSeries.setData(series.data);
    });

    return () => {
      chart.remove();
    };
  }, [series]);

  return (
    <div id="chart" className="w-full h-full">
      {legend && (
        <div id="legend" className="flex">
          {series.map((series, index) => (
            <div className="px-1 text-sm">
              <span style={{ color: lineColors[index] }}>{series.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
