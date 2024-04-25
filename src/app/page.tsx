import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainContainer } from "../styles/home";
import { ProductsContainer } from "../components/ProductsContainer";

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <ProductsContainer />
      </MainContainer>
      <Cart />
      <Footer />
    </>
  );
}
