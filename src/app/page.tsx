import { ItemCard } from "@/components/ItemCard"
import { Product } from "@/types/product"

const page = async () => {

    const res = await fetch(`${process.env.API_BASE_URL}/api/products`, {
        cache: 'force-cache'
    })

    const data = await res.json()

    const products: Product[] = data.products

    if (!Array.isArray(products)) {
        return null
    }


    return(
        <main className="max-w-7xl mx-auto pb-8 px-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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