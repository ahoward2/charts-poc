type HCOptions = {
  legend?: boolean;
  subTitleEnabled?: boolean;
  yAxisTitle?: string;
};

export const commonHCOptions = ({
  legend = true,
  subTitleEnabled = true,
  yAxisTitle = "Default Title",
}: HCOptions) => ({
  chart: {
    zooming: {
      type: "x",
    },
    style: {
      fontFamily: "Montserrat",
    },
  },
  title: {
    text: "",
  },
  subtitle: subTitleEnabled
    ? {
        text:
          document.ontouchstart === undefined
            ? "Click and drag in the plot area to zoom in"
            : "Pinch the chart to zoom in",
        align: "center",
      }
    : {},
  xAxis: {
    type: "datetime",
  },
  yAxis: {
    title: {
      text: yAxisTitle,
    },
  },
  legend: {
    enabled: legend,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    area: {
      marker: {
        radius: 2,
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      threshold: null,
    },
  },
});
