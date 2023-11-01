import { createChart } from "lightweight-charts";
import { useEffect } from "react";
import ibmDaily from "../../../public/data/ibm-daily.json"
import { GlobalLayout } from "@/layouts/GlobalLayout";

const data = Object.entries(ibmDaily["Time Series (Daily)"]).map(([key, value]) => {
    return { time: key, value: Number(value["4. close"]) }
})

const timeAscData = data.reverse()

export default function BasicLine() {

    useEffect(() => {
        const chart = createChart("chart", { width: window.innerWidth, height: window.innerHeight, watermark: { color: "rgba(0, 0, 0, 0.25)", text: "IBM Daily", visible: true } });
        const lineSeries = chart.addLineSeries();
        lineSeries.setData(timeAscData);

        return () => {
            chart.remove()
        }
    }, [])

    return (
        <GlobalLayout>
            <div id="chart"></div>
        </GlobalLayout>
    )
}