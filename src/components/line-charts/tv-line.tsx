import { lineColors } from "@/lib/securities/builder";
import { createChart } from "lightweight-charts";
import { useEffect } from "react";

type Props = {
  data: {
    time: string;
    value: number;
  }[][];
};

export const TVLineSeries = ({ data }: Props) => {
  useEffect(() => {
    const chart = createChart("chart", {
      autoSize: true,
    });

    data.forEach((series, index) => {
      const lineSeries = chart.addLineSeries({
        color: lineColors[index],
      });
      lineSeries.setData(series);
    });

    return () => {
      chart.remove();
    };
  }, [data]);

  return <div id="chart" className="w-full h-full"></div>;
};
