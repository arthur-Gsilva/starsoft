'use client'

import Image from "next/image"
import { useState } from "react"
import { Sidebar } from "./sidebar/Sidebar"
import { useAppSelector } from "@/store"

export const NavbarOpener = () => {

    const [open, setOpen] = useState<boolean>(false)

    const products = useAppSelector(state => state.cart.cart)

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
                    {products.length}
                </div>
            </div>

            <Sidebar 
                opened={open}
                setOpened={setOpen}
            />
        </>
        
    )
}