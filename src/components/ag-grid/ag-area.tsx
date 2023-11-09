import React, { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { lineColors } from "@/lib/securities/builder";

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
  yAxisTitle?: string;
};

export const AGAreaSeries = ({ series, legend = false, yAxisTitle }: Props) => {
  const [options, setOptions] = useState<AgChartOptions>({});

  useEffect(() => {
    setOptions({
      autoSize: true,
      title: {
        enabled: yAxisTitle ? true : false,
        text: yAxisTitle,
      },
      series: series.map((serie, index) => ({
        data: serie.data.map((item) => ({
          time: new Date(item.time).getTime(),
          value: item.value,
        })),
        type: "area",
        xKey: "time",
        yKey: "value",
        yName: serie.label,
        fill: lineColors[index],
        stroke: lineColors[index],
        marker: {
          fill: lineColors[index],
          strokeWidth: 0,
          size: 1,
        },
        showInLegend: legend,
      })),
      axes: [
        {
          type: "time",
          position: "bottom",
        },
        {
          type: "number",
          position: "left",
        },
      ],
    });
  }, [series]);

  return <AgChartsReact options={options} />;
};
