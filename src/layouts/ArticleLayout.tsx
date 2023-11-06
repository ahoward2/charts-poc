import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ArticleLayout({ children }: Props) {
  return (
    <div className="w-full justify-center h-screen flex mt-12 mb-20 overflow-auto">
      <article className="prose lg-prose-xl h-[1500px]">{children}</article>
    </div>
  );
}
