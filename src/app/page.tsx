import { ItemCard } from "@/components/ItemCard"
import { Product } from "@/types/product"
import { headers } from "next/headers"

const page = async () => {
    const headersList = headers()
    const host = (await headersList).get('host')

    const protocol =
        process.env.NODE_ENV === 'development' ? 'http' : 'https'

    const res = await fetch(`${protocol}://${host}/api/products`, {
        cache: 'no-store',
    })

    const products: Product[] = await res.json()

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