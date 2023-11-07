import { getSecurityDataById } from "@/lib/securities/builder";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

type Props = {
  id: number;
  mode?: "dense" | "comfort";
};

const rowHeight = {
  dense: 25,
  comfort: 50,
};

export const FeatureComparisonTable = ({ id, mode = "comfort" }: Props) => {
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "characteristic",
    },
    {
      field: "highcharts",
    },
    {
      field: "tradingview",
    },
    {
      field: "chartjs",
    },
    {
      field: "aggrid",
    },
    {
      field: "plotly",
    },
  ]);

  const [rowData, setRowData] = useState(staticRowData);

  return (
    <div id="table-container" className="ag-theme-alpine w-full h-[250px]">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowHeight={rowHeight[mode]}
      />
    </div>
  );
};

const staticRowData = [
  {
    characteristic: "Annual Price Per Seat",
    highcharts: "$316",
    tradingview: "Free",
    aggrid: "Free",
    chartjs: "Free",
    plotly: "Free",
  },
  {
    characteristic: "Export Options",
    highcharts: "CSV, PNG, JPEG, PDF, SVG",
    tradingview: "Flexible API (toBlob, toDataUrl, etc.)",
    aggrid: "PNG, JPEG",
    chartjs: "None",
    plotly: "PNG, SVG, JPEG, WebP",
  },
  {
    characteristic: "Bundle Size",
    highcharts: "96.3kb",
    tradingview: "48.5kb",
    aggrid: "124.6kb",
    chartjs: "66.7kb",
    plotly: "1.1mb",
  },
  {
    characteristic: "# of Chart Types",
    highcharts: "~50",
    tradingview: "~6",
    aggrid: "~28",
    chartjs: "~9",
    plotly: "~100",
  },
];
