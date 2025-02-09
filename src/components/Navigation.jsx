"use client"

import ThemeButton from './ThemeButton'
import NavLink from './NavLink'


export default function Navigation() {
    return <div className='max-w-3xl flex gap-6  items-center mx-auto'>
        <NavLink text="Home" path="/" />
        <NavLink text="Blog" path="/blog" />
        <NavLink text="Contact Me" path="/contact" />

        <ThemeButton />
    </div>

}