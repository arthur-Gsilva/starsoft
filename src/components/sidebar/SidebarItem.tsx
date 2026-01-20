import { GoTrash } from "react-icons/go";


import { Product } from "@/types/product"
import Image from "next/image"
import { QuantityActions } from "./QuantityActions"

type Props = {
    product: Product
}

export const SidebarItem = ({ product }: Props) => {
    return(
        <div className="rounded-md px-8 py-5 bg-[#2B2B2B] flex items-center gap-5">
            <div className="bg-[#22232C] p-10 rounded-md flex items-center justify-center ">
                <Image
                    src={product.image}
                    alt={product.name}
                    height={160}
                    width={160}
                />
            </div>

            <div className="flex flex-col gap-3">
                <h5 className="text-lg">{product.name}</h5>
                <h6 className="text-xs text-gray-400">{product.description}</h6>

                <div className="text-md flex items-center gap-2">
                    <Image
                        src='/products/coin.png'
                        alt='moeda'
                        height={10}
                        width={20}
                    />
                    {product.price} ETH
                </div>

                <div className="flex items-center justify-between">
                    <QuantityActions />

                    <button className="bg-[#FF8310] rounded-full text-white w-10 h-10 flex items-center justify-center text-xl hover:opacity-70 transition-all cursor-pointer">
                        <GoTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}