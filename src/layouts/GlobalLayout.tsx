import Link from "next/link";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
  return (
    <div className={`${montserrat.className} text-black h-screen`}>
      <header className="bg-owl-blue-dark h-12 flex items-center px-6">
        <Link href="/">
          <div className="text-white font-semibold">Old Well Labs</div>
        </Link>
      </header>
      <div className="flex w-screen justify-between">
        <nav className="bg-owl-blue-dark text-white flex flex-col py-6 px-6 w-48 min-w-[200px]">
          {/* <Link href="/dashboard">
            <div className="py-2 text-sm">Dashboard</div>
          </Link>
          <Link href="/managers">
            <div className="py-2 text-sm">Managers</div>
          </Link>
          <Link href="/allocators">
            <div className="py-2 text-sm">Allocators</div>
          </Link> */}
          <Link href="/security">
            <div className="py-2 text-sm">Stocks</div>
          </Link>
        </nav>
        <main className={`bg-white min-h-screen h-full w-full`}>
          {children}
        </main>
      </div>
    </div>
  );
};
