import { GlobalLayout } from "@/layouts/GlobalLayout";
import { StocksLayout } from "@/layouts/StocksLayout";
import { StocksTable } from "@/components/tables/stocks-list";

export default function Security() {
  return (
    <GlobalLayout>
      <StocksLayout>
        <StocksTable />
      </StocksLayout>
    </GlobalLayout>
  );
}
