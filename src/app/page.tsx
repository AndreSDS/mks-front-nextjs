import { Header } from "@/components/Header/Header";
import { Container, Content } from "./styles";
import { ProductList } from "@/components/ProductList/ProductList";
import { Footer } from "@/components/Footer/Footer";
import { ShopCart } from "@/components/ShopCart/ShopCart";

export default async function Home() {
  return (
    <Container>
      <ShopCart />
      <Header />
      <Content>
        <ProductList />
      </Content>
      <Footer />
    </Container>
  );
}
