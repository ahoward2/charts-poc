import { GlobalLayout } from "@/layouts/GlobalLayout";
import { StocksLayout } from "@/layouts/StocksLayout";
import { TVLineSeries } from "@/components/line-charts/tv-line";
import { useRouter } from "next/router";
import {
  getSecurityById,
  getSecurityCloseDataById,
} from "@/lib/securities/builder";
import { StocksDetailTable } from "@/components/tables/StockDetail";

export default function Security() {
  const router = useRouter();

  const { id } = router.query;

  return (
    <GlobalLayout>
      <StocksLayout>
        {id && (
          <div className="flex px-6 py-4 w-full h-[350px]">
            <TVLineSeries
              series={[
                {
                  label: getSecurityById(Number(id))?.name ?? "undefined",
                  data: getSecurityCloseDataById(Number(id)),
                },
              ]}
            ></TVLineSeries>
          </div>
        )}
        <StocksDetailTable id={Number(id)} mode="dense" />
      </StocksLayout>
    </GlobalLayout>
  );
}
