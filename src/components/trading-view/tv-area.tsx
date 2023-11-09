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
  id?: string;
  series: Series[];
  legend?: boolean;
};

export const TVAreaSeries = ({
  id = "chart",
  series,
  legend = false,
}: Props) => {
  useEffect(() => {
    const chart = createChart(id, {
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

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [series]);

  return (
    <div id={id} className="w-full h-full px-2">
      {legend && (
        <div id="legend" className="flex">
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
