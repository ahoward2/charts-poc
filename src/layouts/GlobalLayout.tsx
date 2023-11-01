import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const GlobalLayout = ({ children }: Props) => {
    return (
        <div>
            <div className="bg-black fixed z-50 w-28 left-6 top-6 text-center rounded-lg">
                <Link href="/">{`< Back Home`}</Link>
            </div>
            {children}
        </div>
    )
}