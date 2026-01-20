'use client'

import { Product } from "@/types/product"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { FaXmark } from "react-icons/fa6"

type Props = {
    product: Product | null
    opened: boolean
    onClose: () => void
}

export const ProductModal = ({ product, opened, onClose }: Props) => {
    if (!product) return null

    return (
        <AnimatePresence>
            {opened && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-lg bg-[#191A20] rounded-lg p-6"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
                        >
                            <FaXmark size={20} />
                        </button>

                        <div className="flex flex-col gap-6">
                            <div className="bg-[#22232C] rounded-md p-6 flex justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={180}
                                    height={180}
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 mt-3">
                                    {product.description}
                                </p>
                            </div>

                            <div className="text-md font-bold flex items-center gap-2">
                                <Image
                                    src='/products/coin.png'
                                    alt='moeda'
                                    height={10}
                                    width={20}
                                />
                                {product.price} ETH
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
