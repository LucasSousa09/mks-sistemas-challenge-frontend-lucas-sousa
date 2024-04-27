import type { Product } from '../components/ProductsContainer'

export async function getProducts(){
    try{
        const res = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?'  + new URLSearchParams({
            page: "1",
            rows: "8",
            sortBy: "id",
            orderBy: "DESC"
        }))
        
        const { products }: {products: Product[]} = await res.json()
    
        return products
    }
    catch(err){
        console.error(err)
    }
}