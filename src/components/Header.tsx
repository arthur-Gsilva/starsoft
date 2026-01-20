import Image from "next/image"
import { NavbarOpener } from "./NavbarOpener"

export const Header = () => {
    return(
        <header className="w-full py-8 border-b border-b-white mb-12">
            <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-8">
                <Image
                    src={'/logo.png'}
                    alt="Logo da Starsoft"
                    width={80}
                    height={80}
                />
                
                <NavbarOpener />
            </nav>
        </header>
    )
}