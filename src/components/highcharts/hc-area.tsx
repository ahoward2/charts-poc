import Highcharts from "highcharts";
import { useEffect } from "react";
import { Options } from "highcharts";
import { commonHCOptions } from "../common";

type Series = {
  label: string;
  data: number[][];
};

type Props = {
  series: Series[];
  id?: string;
  legend?: boolean;
  subTitleEnabled?: boolean;
  yAxisTitle?: string;
};

export const HCAreaSeries = ({
  id = "chart",
  series,
  legend = false,
  subTitleEnabled = true,
  yAxisTitle,
}: Props) => {
  useEffect(() => {
    const chart = Highcharts.chart(id, {
      ...(commonHCOptions({ legend, subTitleEnabled, yAxisTitle }) as Options),
      series: series.map((series) => ({
        type: "area",
        name: series.label,
        data: series.data,
      })),
    });
    return () => {
      chart.destroy();
    };
  }, [series]);

  return <div id={id} className="w-full h-full pt-8"></div>;
};
