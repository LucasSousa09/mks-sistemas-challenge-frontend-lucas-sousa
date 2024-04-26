import { Product } from "../Product"
import { Container } from "./styles"

export type Product = {
  id: number,
  name: string,
  description: string,
  photo: string,
  price: string,
}

export async function ProductsContainer(){
    const res = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?'  + new URLSearchParams({
        page: "1",
        rows: "8",
        sortBy: "id",
        orderBy: "DESC"
      }))
    
    const { products }: {products: Product[]} = await res.json()

    return (
        <Container>
            {
                products.map((product) => (
                <Product 
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    photo={product.photo}
                    price={product.price}
                    description={product.description}
                />))
            }
        </Container>
    )
}