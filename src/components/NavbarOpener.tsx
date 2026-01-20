'use client'

import Image from "next/image"
import { useState } from "react"
import { Sidebar } from "./sidebar/Sidebar"

export const NavbarOpener = () => {

    const [open, setOpen] = useState<boolean>(false)

    return(
        <>
            <div 
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <Image
                    src={'/Bag.png'}
                    alt="Ícone de compra"
                    width={30}
                    height={30}
                />
                <div>
                    0
                </div>
            </div>

            <Sidebar 
                opened={open}
                setOpened={setOpen}
            />
        </>
        
    )
}