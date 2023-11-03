import { TVLineSeries } from "@/components/line-charts/tv-line";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { StocksLayout } from "@/layouts/StocksLayout";
import {
  getSecurityById,
  getSecurityCloseDataById,
} from "@/lib/securities/builder";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ReportBuilder() {
  const [benchmarks, setBenchMarks] = useState<number[]>([]);
  const router = useRouter();
  const { id } = router.query;

  const handleAddBenchmark = (benchmark: number) => {
    setBenchMarks((prev) => [...prev, benchmark]);
  };

  const handleRemoveBenchmark = (benchmark: number) => {
    setBenchMarks((prev) => prev.filter((item) => item !== benchmark));
  };

  const data = [getSecurityCloseDataById(Number(id))].concat(
    benchmarks.map((benchmark) => getSecurityCloseDataById(Number(benchmark)))
  );

  return (
    <GlobalLayout>
      <StocksLayout>
        <div className="flex px-6 py-4 h-96 w-full">
          <div className="border-r w-1/6 pr-6">
            <div className="bg-grey-light text-sm px-3 py-1 rounded-md mb-3">
              {getSecurityById(Number(id))?.name ?? "undefined"}
            </div>
            <button
              onClick={() => handleAddBenchmark(2)}
              className="bg-grey-dark text-white text-sm px-3 w-full py-1 rounded-md mb-3"
            >
              + Add Benchmark
            </button>
            {benchmarks.map((benchmark) => (
              <button
                onClick={() => handleRemoveBenchmark(benchmark)}
                className="bg-grey-light text-sm px-3 py-1 rounded-md mb-3 w-full flex justify-between items-center"
              >
                <span>
                  {getSecurityById(Number(benchmark))?.name ?? "undefined"}
                </span>
                <span className="text-red-500">x</span>
              </button>
            ))}
          </div>
          <div className="w-5/6 h-[350px]">
            <TVLineSeries data={data}></TVLineSeries>
          </div>
        </div>
      </StocksLayout>
    </GlobalLayout>
  );
}
