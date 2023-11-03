import { GlobalLayout } from "@/layouts/GlobalLayout";
import { StocksLayout } from "@/layouts/StocksLayout";
import { StocksTable } from "@/components/tables/Stocks";

export default function Security() {
  return (
    <GlobalLayout>
      <StocksLayout>
        <StocksTable />
      </StocksLayout>
    </GlobalLayout>
  );
}
