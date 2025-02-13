"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuBurger from './MenuBurger';
import Image from 'next/image'
import logoweb from '../../public/logoweb.svg'

const navLinks = [
    { href: "#header", title: "Aurore" },
    { href: "#parcours", title: "Traverse" },
    { href: "#abilities", title: "Essence" },
    { href: "#projects", title: "Essor" },
    { href: "#contact", title: "Écho" },
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="https://powai.dev">
                    <Image className="w-28 px-4 py-2" src={logoweb} alt="Portfolio" />
                </Link>            
                <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={()=> setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white ">
                            <Bars2Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={()=> setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">{
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.href} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuBurger links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar