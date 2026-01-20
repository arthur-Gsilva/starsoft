'use client'

import { products } from "@/data/products"
import { FaArrowLeftLong } from "react-icons/fa6"
import { SidebarItem } from "./SidebarItem"
import Image from "next/image"
import { Button } from "../Button"

type Props = {
    opened: boolean
    setOpened: (a: boolean) => void
}

export const Sidebar = ({ opened, setOpened }: Props) => {
    return (
        <>
            <div
                onClick={() => setOpened(false)}
                className={`
                    fixed inset-0 bg-black/60 z-40
                    transition-opacity duration-300
                    ${opened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
            />

            <aside
                className={`
                    fixed top-0 right-0 h-full w-1/2 max-w-xl
                    bg-[#232323] z-50 shadow-2xl
                    px-8 pt-16 flex flex-col
                    transform transition-transform duration-300 ease-in-out
                    ${opened ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="flex justify-between items-center w-[60%]">
                    <div
                        className="text-[#FF8310] bg-[#2B2B2B] w-12 h-12 rounded-full
                        flex items-center justify-center cursor-pointer
                        hover:opacity-70 transition-all"
                        onClick={() => setOpened(false)}
                    >
                        <FaArrowLeftLong />
                    </div>

                    <h3 className="text-xl">Mochila de compras</h3>
                </div>

                <div className="flex flex-col gap-4 flex-1 overflow-y-auto mt-12 custom-scroll">
                    {products.map((product) => (
                        <SidebarItem
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                <div className="flex justify-between items-center my-8 text-xl font-bold">
                    <h6>Total</h6>

                    <div className="flex items-center gap-2">
                        <Image
                            src="/products/coin.png"
                            alt="moeda"
                            height={10}
                            width={20}
                        />
                        77 ETH
                    </div>
                </div>

                <Button
                    onClick={() => console.log('clicou')}
                    label="Finalizar compra!"
                />
            </aside>
        </>
    )
}
