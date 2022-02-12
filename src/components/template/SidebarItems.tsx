import Link from "next/link";

interface SidebarItemsProps {
    url: string
    text: string
    icon: any
}

export default function SidebarItems(props: SidebarItemsProps) {
    return (
        <li className={`
            hover:bg-gray-200
        `}>
            <Link href={props.url}>
                <a className={`
                    flex flex-col justify-center items-center
                    w-20 h-20`
                }>
                    {props.icon}
                    <span className={`
                        text-xs font-light text-gray-600
                    `}>
                        {props.text}
                    </span>
                </a>
            </Link>
        </li>
    )
}