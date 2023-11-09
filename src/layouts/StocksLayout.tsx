import { NavItem } from "@/components/ui/nav-item";
import { getSecurityById } from "@/lib/securities/builder";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const StocksLayout = ({ children }: Props) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div className="w-full h-full mt-24">
      {router.pathname !== "/security" && (
        <>
          <div className="w-screen h-12 z-20 bg-white flex border-b items-center px-6 fixed top-12">
            <div className="text-black h-6 pr-6">
              {getSecurityById(Number(id))?.name}
            </div>
          </div>
          {id && (
            <nav className="h-12 flex items-center z-20 px-6 border-b fixed top-24 w-screen bg-white">
              <NavItem href={`/security/${id}`}>Summary</NavItem>
              <NavItem href={`/security/${id}/report-builder`}>
                Report Builder
              </NavItem>
            </nav>
          )}
        </>
      )}
      {children}
    </div>
  );
};
