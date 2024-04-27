import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainContainer } from "../styles/home";
import { ProductsContainer } from "../components/ProductsContainer";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getProducts } from "@/server/actions";

export default async function Home() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
      queryKey: ["products"],
      queryFn: getProducts,
  })

  return (
    <>
      <Header />
      <MainContainer>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductsContainer />
        </HydrationBoundary>
      </MainContainer>
      <Cart />
      <Footer />
    </>
  );
}
