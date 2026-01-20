'use client'

import { GoTrash } from "react-icons/go";

import { CartItem } from "@/types/product"
import Image from "next/image"
import { QuantityActions } from "./QuantityActions"
import { removeCartItem, useAppDispatch } from "@/store";

type Props = {
    product: CartItem
}

export const SidebarItem = ({ product }: Props) => {


    const dispatch = useAppDispatch()

    const handleRemoveItemCard = () => {
        dispatch(removeCartItem(product.item.id))
    }

    return(
        <div className="rounded-md px-8 py-5 bg-[#2B2B2B] flex items-center gap-5">
            <div className="bg-[#22232C] p-10 rounded-md flex items-center justify-center ">
                <Image
                    src={product.item.image}
                    alt={product.item.name}
                    height={160}
                    width={160}
                />
            </div>

            <div className="flex flex-col gap-3">
                <h5 className="text-lg">{product.item.name}</h5>
                <h6 className="text-xs text-gray-400">{product.item.description}</h6>

                <div className="text-md flex items-center gap-2">
                    <Image
                        src='/products/coin.png'
                        alt='moeda'
                        height={10}
                        width={20}
                    />
                    {product.item.price} ETH
                </div>

                <div className="flex items-center justify-between">
                    <QuantityActions product={product}/>

                    <button 
                        className="bg-[#FF8310] rounded-full text-white w-10 h-10 flex items-center justify-center text-xl hover:opacity-70 transition-all cursor-pointer"
                        onClick={handleRemoveItemCard}
                    >
                        <GoTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}