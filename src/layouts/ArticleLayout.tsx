import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ArticleLayout({ children }: Props) {
  return <article className="px-4 pt-24 prose lg-prose-xl">{children}</article>;
}
