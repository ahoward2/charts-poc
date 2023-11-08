import { ColDef, ICellRendererParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import {
  getAllSecuritiesData,
  getSecurityByName,
} from "@/lib/securities/builder";
import Link from "next/link";

export const StocksTable = () => {
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "name",
      sortable: true,
      filter: true,
      cellRenderer: NameCellRenderer,
    },
    {
      field: "id",
      sortable: true,
      filter: true,
    },
  ]);

  const [rowData, setRowData] = useState(getAllSecuritiesData());

  return (
    <div id="table-container" className="ag-theme-alpine w-full h-[1000px]">
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

const NameCellRenderer = (params: ICellRendererParams) => {
  const security = getSecurityByName(params.value);
  const link = `/security/${security?.id ?? 1}`;
  return (
    <Link href={link}>
      <span className="underline">{params.value}</span>
    </Link>
  );
};
