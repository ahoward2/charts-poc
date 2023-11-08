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

export const TVAreaSeries = ({ series, legend = false }: Props) => {
  useEffect(() => {
    const chart = createChart("chart", {
      autoSize: false,
      layout: {
        fontFamily: "Montserrat",
      },
    });

    series.forEach((series, index) => {
      const areaSeries = chart.addAreaSeries({
        lineColor: lineColors[index],
        bottomColor: lineColors[index],
      });
      areaSeries.setData(series.data);
    });

    return () => {
      chart.remove();
    };
  }, [series]);

  return (
    <div id="chart" className="w-full h-full px-2">
      {legend && (
        <div id="legend" className="flex relative top-4 z-10 bg-white">
          {series.map((series, index) => (
            <div key={series.label} className="px-1 text-sm">
              <span style={{ color: lineColors[index] }}>{series.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
