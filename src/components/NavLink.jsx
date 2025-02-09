"use client"


import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ text, path }) {
    const pathname = usePathname()

    return <Link href={path} className={`hover:underline underline-offset-2
        text-lg font-serif
     ${pathname === path && 'active'}`}>

        {text}

    </Link>
}