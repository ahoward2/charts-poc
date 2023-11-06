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

export const PlotlyLineSeries = ({ series, legend = false }: Props) => {
  const data = series.map((serie) => ({
    x: serie.data.map((item) => item.x),
    y: serie.data.map((item) => item.y),
    name: serie.label,
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
    modeBar: {
      orientation: "h",
    },
  };

  const config = {
    responsive: true,
  };

  return (
    <div id="chart" className="w-full h-full">
      <Plot
        className="w-full h-full"
        data={data}
        layout={layout}
        config={config}
        useResizeHandler
      />
    </div>
  );
};
