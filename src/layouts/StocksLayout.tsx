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
    <div className="w-full h-full">
      {router.pathname !== "/security" && (
        <>
          <div className="w-full h-12 bg-white flex border-b items-center px-6 sticky top-0">
            <div className="text-black h-6 pr-6">
              {getSecurityById(Number(id))?.name}
            </div>
          </div>
          {id && (
            <nav className="h-12 flex items-center px-6 border-b sticky">
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
