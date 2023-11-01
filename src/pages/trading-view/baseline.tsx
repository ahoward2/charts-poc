import { createChart } from "lightweight-charts";
import { useEffect } from "react";
import ibmDaily from "../../../public/data/ibm-daily.json"
import { GlobalLayout } from "@/layouts/GlobalLayout";

const data = Object.entries(ibmDaily["Time Series (Daily)"]).map(([key, value]) => {
    return { time: key, value: Number(value["4. close"]) }
})

const timeAscData = data.reverse()

export default function Baseline() {

    useEffect(() => {
        const chart = createChart("chart", { width: window.innerWidth, height: window.innerHeight, watermark: { color: "rgba(0, 0, 0, 0.25)", text: "IBM Daily", visible: true } });
        const baselineSeries = chart.addBaselineSeries({ baseValue: { type: 'price', price: 140 }, topLineColor: 'rgba( 38, 166, 154, 1)', topFillColor1: 'rgba( 38, 166, 154, 0.28)', topFillColor2: 'rgba( 38, 166, 154, 0.05)', bottomLineColor: 'rgba( 239, 83, 80, 1)', bottomFillColor1: 'rgba( 239, 83, 80, 0.05)', bottomFillColor2: 'rgba( 239, 83, 80, 0.28)' });
        baselineSeries.setData(timeAscData);

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