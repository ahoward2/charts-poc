import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ArticleLayout({ children }: Props) {
  return (
    <div className="w-full min-h-full justify-center flex mt-12">
      <article className="prose lg-prose-xl">{children}</article>
    </div>
  );
}
