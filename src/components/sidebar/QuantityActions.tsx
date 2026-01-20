import { addQuantityItem, lessQuantityItem, useAppDispatch } from "@/store"
import { CartItem } from "@/types/product"

type Props = {
    product: CartItem
}

export const QuantityActions = ({ product }: Props) => {

    const dispatch = useAppDispatch()
    
        const handleAddCart = (plus: boolean, id: number) => {
            if(plus === true){
                dispatch(addQuantityItem(id))
            }
            
            if(plus === false){
                dispatch(lessQuantityItem(id))
            }
        }

    return(
        <div className="bg-[#232323] flex items-center rounded-sm gap-5 p-2 text-xl">
            <button 
                className="cursor-pointer flex-1"
                onClick={() => handleAddCart(false, product.item.id)}
            >-</button>
            <div>{product.quantity}</div>
            <button 
                className="cursor-pointer flex-1"
                onClick={() => handleAddCart(true, product.item.id)}
            >+</button>
        </div>
    )
}