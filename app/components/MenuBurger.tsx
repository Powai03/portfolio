import React from 'react'
import NavLink from './NavLink'

interface Link {
    href: string;
    title: string;
}

interface MenuBurgerProps {
    links: Link[];
}

const MenuBurger: React.FC<MenuBurgerProps> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link: Link, index: number) => (
            <li key={index}>
                <NavLink href={link.href} title={link.title} />
            </li>
            ))}
        </ul>
    )
}

export default MenuBurger