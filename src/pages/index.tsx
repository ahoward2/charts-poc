import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col p-10">
      <h1 className="font-black text-3xl">Charts</h1>
      <nav className="flex flex-col">
        <span className="font-bold text-lg">Trading View</span>
        <Link href="/trading-view/basic-line"><span className="text-gray-400">Basic Line</span></Link>
        <Link href="/trading-view/baseline"><span className="text-gray-400">Baseline</span></Link>
        <span className="font-bold text-lg">HighCharts</span>
        <Link href="/highcharts/basic-line"><span className="text-gray-400">Basic Line</span></Link>
      </nav>
    </div>
  )
}