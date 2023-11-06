import { HCLineSeries } from "@/components/line-charts/hc-line";
import { PlotlyLineSeries } from "@/components/line-charts/plotly-line";
import { TVLineSeries } from "@/components/line-charts/tv-line";
import { CJSLineSeries } from "@/components/line-charts/cjs-line";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { StocksLayout } from "@/layouts/StocksLayout";
import {
  getAllSecuritiesData,
  getSecurityById,
  getSecurityCloseDataById,
} from "@/lib/securities/builder";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ReportBuilder() {
  const [benchmarks, setBenchMarks] = useState<number[]>([]);
  const router = useRouter();
  const { id, variant } = router.query;

  const handleAddBenchmark = (benchmark: number) => {
    setBenchMarks((prev) => [...prev, benchmark]);
  };

  const handleRemoveBenchmark = (benchmark: number) => {
    setBenchMarks((prev) => prev.filter((item) => item !== benchmark));
  };

  const handleClearBenchmarks = () => {
    setBenchMarks([]);
  };

  const data = [
    {
      label: getSecurityById(Number(id))?.name ?? "undefined",
      data: getSecurityCloseDataById(Number(id)),
    },
  ].concat(
    benchmarks.map((benchmark) => ({
      label: getSecurityById(Number(benchmark))?.name ?? "undefined",
      data: getSecurityCloseDataById(Number(benchmark)),
    }))
  );

  return (
    <GlobalLayout>
      <StocksLayout>
        <div className="flex px-6 py-4 h-96 w-full">
          <div className="border-r w-1/6 pr-6">
            <div className="bg-grey-light text-sm px-3 py-1 rounded-md mb-3">
              {getSecurityById(Number(id))?.name ?? "undefined"}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-grey-dark text-white text-sm px-3 w-full py-1 rounded-md mb-3">
                {variant === "hc"
                  ? "Highcharts"
                  : variant === "plotly"
                  ? "Plotly"
                  : variant === "cjs"
                  ? "Chart.js"
                  : "TradingView"}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Chart Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => router.push(`/security/${id}/report-builder`)}
                >
                  TradingView
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    router.push(`/security/${id}/report-builder?variant=hc`)
                  }
                >
                  Highcharts
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    router.push(`/security/${id}/report-builder?variant=cjs`)
                  }
                >
                  Chart.js
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    router.push(`/security/${id}/report-builder?variant=plotly`)
                  }
                >
                  Plotly
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger
                disabled={benchmarks.length >= 6}
                className="bg-grey-dark text-white text-sm px-3 w-full py-1 rounded-md mb-3 disabled:opacity-25"
              >
                + Add Benchmark
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Securities</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {getAllSecuritiesData()
                  .filter(
                    (security) =>
                      security.id !== Number(id) &&
                      !benchmarks.includes(security.id)
                  )
                  .map((security) => (
                    <DropdownMenuItem
                      key={security.id}
                      onClick={() => handleAddBenchmark(security.id)}
                    >
                      {security.name}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {benchmarks.map((benchmark) => (
              <button
                key={benchmark}
                onClick={() => handleRemoveBenchmark(benchmark)}
                className="bg-grey-light text-sm px-3 py-1 rounded-md mb-3 w-full flex justify-between items-center"
              >
                <span>
                  {getSecurityById(Number(benchmark))?.name ?? "undefined"}
                </span>
                <span className="text-red-500">x</span>
              </button>
            ))}
            {benchmarks.length > 0 && (
              <button
                onClick={() => handleClearBenchmarks()}
                className="bg-grey-dark text-white text-sm px-3 w-full py-1 rounded-md mb-3"
              >
                Clear Benchmarks
              </button>
            )}
          </div>
          <div className="w-5/6 h-[350px]">
            {variant === "hc" ? (
              <HCLineSeries
                series={data.map((serie) => ({
                  ...serie,
                  data: serie.data.map((item) => [
                    new Date(item.time).getTime(),
                    item.value,
                  ]),
                }))}
                legend
              ></HCLineSeries>
            ) : variant === "plotly" ? (
              <PlotlyLineSeries
                series={data.map((serie) => ({
                  ...serie,
                  data: serie.data.map((item) => ({
                    x: item.time,
                    y: item.value,
                  })),
                }))}
                legend
              ></PlotlyLineSeries>
            ) : variant === "cjs" ? (
              <CJSLineSeries series={data} legend></CJSLineSeries>
            ) : (
              <TVLineSeries series={data} legend></TVLineSeries>
            )}
          </div>
        </div>
      </StocksLayout>
    </GlobalLayout>
  );
}
