import Image from "next/image"
import { NAV_ITEMS } from "@/app/constants"
import logo from '@/public/assets/images/logo.png'
import { NavbarItem } from "./NavbarItem"
import Link from "next/link"

export function Navbar() {

    return (
        <div>
            {/* Logo */}
            <Link href={'/'}>
                <Image src={logo} alt="Logo" className="w-40" />
            </Link>
            {/* Navbar */}
            <nav className="space-y-4 mt-4">
                {NAV_ITEMS.map((navbarItem) => (
                    <NavbarItem {...navbarItem} key={navbarItem.category} />
                ))}
            </nav>
        </div>
    )
}