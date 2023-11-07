import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

type Series = {
  label: string;
  data: {
    x: string;
    y: number;
  }[];
};

type Props = {
  series: Series[];
  legend?: boolean;
};

export const PlotlyAreaSeries = ({ series, legend = false }: Props) => {
  const data = series.map((serie) => ({
    x: serie.data.map((item) => item.x),
    y: serie.data.map((item) => item.y),
    name: serie.label,
    fill: "tozeroy",
  }));

  const layout = {
    autosize: true,
    showlegend: legend,
    type: "scatter",
    legend: {
      x: 0,
      y: 1,
    },
    font: {
      family: "Montserrat",
    },
  };

  const config = {
    responsive: true,
    modeBarButtonsToRemove: [
      "pan2d",
      "zoom2d",
      "zoomIn2d",
      "zoomOut2d",
      "autoScale2d",
    ],
  };

  return (
    <div id="chart" className="w-full h-full">
      <Plot
        className="w-full h-full"
        data={data}
        layout={layout}
        // @ts-ignore
        config={config}
        useResizeHandler
      />
    </div>
  );
};
