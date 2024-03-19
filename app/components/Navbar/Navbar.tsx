import Image from "next/image";
import { NAV_ITEMS } from "@/app/constants";
import logo from '@/public/assets/images/logo.png'
import { NavbarItem } from "./NavbarItem";
export function Navbar() {

    return (
        <div>
            {/* Logo */}
            <Image src={logo} alt="Logo" className="w-40" />

            {/* Navbar */}
            <nav className="space-y-4 mt-4">
                {NAV_ITEMS.map((navbarItem) => (
                    <NavbarItem {...navbarItem} />
                ))}
            </nav>
        </div>
    )
}