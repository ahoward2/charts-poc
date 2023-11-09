import { GlobalLayout } from "@/layouts/GlobalLayout";
import { StocksLayout } from "@/layouts/StocksLayout";
import { useRouter } from "next/router";
import {
  getSecurityById,
  getSecurityCloseDataById,
} from "@/lib/securities/builder";
import { StocksDetailTable } from "@/components/tables/stock-detail";
import { HCLineSeries } from "@/components/highcharts/hc-line";

export default function Security() {
  const router = useRouter();

  const { id } = router.query;

  const data = [
    {
      label: getSecurityById(Number(id))?.name ?? "undefined",
      data: getSecurityCloseDataById(Number(id)),
    },
  ];

  return (
    <GlobalLayout>
      <StocksLayout>
        {id && (
          <div className="flex px-6 py-4 w-full h-[350px]">
            <HCLineSeries
              series={data.map((serie) => ({
                ...serie,
                data: serie.data.map((item) => [
                  new Date(item.time).getTime(),
                  item.value,
                ]),
              }))}
              subTitleEnabled={false}
              yAxisTitle="Close Price"
            ></HCLineSeries>
          </div>
        )}
        <StocksDetailTable id={Number(id)} mode="dense" />
      </StocksLayout>
    </GlobalLayout>
  );
}
