//@ts-nocheck
/**
 * Annoying so far.
 */

import { GlobalLayout } from "@/layouts/GlobalLayout"
import Highcharts from "highcharts"
import ibmDaily from "../../../public/data/ibm-daily.json"
import { useEffect } from "react"

const data = Object.entries(ibmDaily["Time Series (Daily)"]).map(([key, value]) => {
    return { time: key, value: Number(value["4. close"]) }
})

const timeAscData = data.reverse()

export default function BasicLine() {

    useEffect(() => {
        const chart = Highcharts.chart("chart", {
            chart: {
                zooming: {
                    type: "x"
                }
            },
            title: {
                text: "IBM Daily",
                align: "left"
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
                align: 'left'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Close Price'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'line',
                name: 'IBM Daily',
                data: timeAscData
            }]
        })

        return () => {
            chart.destroy()
        }
    }, [])

    return (
        <GlobalLayout>
            <div id="chart"></div>
        </GlobalLayout>
    )
}