'use client'

import { useQuery } from "@tanstack/react-query"
import { Product } from "../Product"
import { Container, SkeletonButton, SkeletonContainer, SkeletonDescription, SkeletonHeader, SkeletonImage } from "./styles"
import { getProducts } from "@/server/actions"
import { easeOut, motion } from "framer-motion"

export type Product = {
  id: number,
  name: string,
  description: string,
  photo: string,
  price: string,
}

export function ProductsContainer(){
    const {data, error, isFetching} = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    })

   return (
        <Container>
            {
                isFetching ? (
                    <>
                        {
                            [1,2,3,4,5,6,7,8].map(skel => (
                            <SkeletonContainer key={skel}>
                                <SkeletonImage as={motion.div} transition={{repeat: Infinity, duration:3, ease:easeOut}} animate={{opacity: [1,0.3, 1]}}/>
                                <SkeletonHeader as={motion.div} transition={{repeat: Infinity, duration:3, ease:easeOut}} animate={{opacity: [1,0.3, 1]}}/>
                                <SkeletonDescription as={motion.div} transition={{repeat: Infinity, duration:3, ease:easeOut}} animate={{opacity: [1,0.3, 1]}}/>
                                <SkeletonButton as={motion.div} transition={{repeat: Infinity, duration:3, ease:easeOut}} animate={{opacity: [1,0.3, 1]}}/>
                            </SkeletonContainer>))
                        }
                    </>
                ) : (
                <>
                    {
                        data !== undefined &&
                        data.map((product) => (
                            <Product 
                            id={product.id}
                            key={product.id}
                            name={product.name}
                            photo={product.photo}
                            price={product.price}
                            description={product.description}
                            />))
                        }
                </>)
            }

        </Container>
    )
}