import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { getSecurityDataById } from "@/lib/securities/builder";

type Props = {
  id: number;
  mode?: "dense" | "comfort";
};

const rowHeight = {
  dense: 25,
  comfort: 50,
};

export const StocksDetailTable = ({ id, mode = "comfort" }: Props) => {
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "time",
      sortable: true,
      filter: true,
    },
    {
      field: "open",
      sortable: true,
      filter: true,
    },
    {
      field: "high",
      sortable: true,
      filter: true,
    },
    {
      field: "low",
      sortable: true,
      filter: true,
    },
    {
      field: "close",
      sortable: true,
      filter: true,
    },
  ]);

  const [rowData, setRowData] = useState(getSecurityDataById(id));

  return (
    <div id="table-container" className="ag-theme-alpine w-full h-[1000px]">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowHeight={rowHeight[mode]}
      />
    </div>
  );
};
