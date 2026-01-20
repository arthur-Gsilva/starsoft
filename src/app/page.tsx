import { ItemCard } from "@/components/ItemCard"
import { products } from "@/data/products"

const page = () => {
    return(
        <main className="max-w-7xl mx-auto pb-8">
            <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                    <ItemCard 
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </main>
    )
}

export default page