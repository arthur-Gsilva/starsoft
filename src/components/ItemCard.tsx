'use client'

import { Product } from "@/types/product"
import Image from "next/image"
import { Button } from "./Button"
import { motion } from "framer-motion"
import { FaEye } from "react-icons/fa"
import { useState } from "react"
import { ProductModal } from "./ProductModal"
import { addCartItem, useAppDispatch } from "@/store"

type Props = {
    product: Product
}

const cardVariants = {
    rest: {},
    hover: {}
}

const iconVariants = {
    rest: {
        opacity: 0,
        y: -20
    },
    hover: {
        opacity: 1,
        y: 0
    }
}

export const ItemCard = ({ product }: Props) => {
    const [opened, setOpened] = useState(false)
    const [added, setAdded] = useState(false)

    const dispatch = useAppDispatch()

    const handleAddCart = (product: Product) => {
        dispatch(addCartItem(product))
        setAdded(true)

        setTimeout(() => {
            setAdded(false)
        }, 1000)
    }

    return (
        <>
            <motion.div
                className="relative bg-[#191A20] rounded-md p-5 overflow-hidden"
                variants={cardVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
            >
                
                <motion.button
                    variants={iconVariants}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    onClick={() => setOpened(true)}
                    className="
                        absolute top-4 right-4 z-10
                        bg-[#FF8310] text-black hover:text-white
                        w-10 h-10 rounded-full cursor-pointer
                        flex items-center justify-center
                        shadow-lg
                    "
                >
                    <FaEye />
                </motion.button>

                <div className="flex flex-col justify-between gap-14">
                    <div className="bg-[#22232C] p-10 rounded-md flex items-center justify-center h-45">
                        <Image
                            src={product.image}
                            alt={product.name}
                            height={140}
                            width={140}
                        />
                    </div>

                    <div className="flex flex-col">
                        <h5 className="text-xl">{product.name}</h5>
                        <h6 className="text-sm text-gray-400 mt-3 min-h-15">
                            {product.description}
                        </h6>

                        <div className="text-xl my-4 flex items-center gap-4">
                            <Image
                                src="/products/coin.png"
                                alt="moeda"
                                height={20}
                                width={30}
                            />
                            {product.price} ETH
                        </div>

                        
                            <Button
                                label={added ? 'Adicionado ao carrinho!' : 'Comprar'}
                                onClick={() => handleAddCart(product)}
                                
                            />
                        
                    </div>
                </div>
            </motion.div>

            <ProductModal
                product={product}
                opened={opened}
                onClose={() => setOpened(false)}
            />
        </>
    )
}
