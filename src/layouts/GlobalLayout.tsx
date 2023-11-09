import Link from "next/link";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
  return (
    <div className={`${montserrat.className} text-black w-screen h-screen`}>
      <header className="bg-owl-blue-dark h-12 flex items-center px-6 fixed w-full z-50">
        <Link href="/">
          <div className="text-white font-semibold">Old Well Labs</div>
        </Link>
      </header>
      <div className="flex w-screen justify-between">
        <nav className="bg-owl-blue-dark text-white flex flex-col pt-16 px-6 w-[200px] fixed z-40 h-screen">
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
        <main
          className={`bg-white min-h-screen flex w-full h-full pl-[200px] pt-12`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
