import Link from "next/link";

type Props = {
  children: string;
  href: string;
};

export const NavItem = ({ children, href }: Props) => {
  return (
    <Link href={href}>
      <div className="text-gray-500 hover:text-gray-900 mr-6">{children}</div>
    </Link>
  );
};
