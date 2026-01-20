import { Product } from "@/types/product"
import Image from "next/image"
import { Button } from "./Button"

type Props = {
    product: Product
}

export const ItemCard = ({ product }: Props) => {

    const handleCart = () => {
        console.log('clicou')
    }

    return(
        <div className="bg-[#191A20] rounded-md p-5">
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
                    <h6 className="text-sm text-gray-400 mt-3 min-h-15">{product.description}</h6>

                    <div className="text-xl my-4 flex items-center gap-4">
                        <Image
                            src='/products/coin.png'
                            alt='moeda'
                            height={20}
                            width={30}
                        />
                        {product.price} ETH
                    </div>

                    <Button 
                        label="Comprar"
                        onClick={handleCart}
                    />
                </div>

                
            </div>
        </div>
    )
}