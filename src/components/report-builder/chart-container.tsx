import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ChartContainer = ({ children }: Props) => {
  return (
    <div className="h-[400px] w-full px-6 py-3">
      <div className="h-[380px] w-full bg-white p-6">{children}</div>
    </div>
  );
};
