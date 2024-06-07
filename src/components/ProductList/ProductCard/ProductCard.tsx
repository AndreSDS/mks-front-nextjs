import {
  CardContainer,
  CardContent,
  CardImageContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardPrice,
  CardButtonAdd,
  CardHeader,
  CardButtonPrice,
  CardButtonsContainer,
} from "./styles";
import { AnimatePresence } from "framer-motion";

import bagIcon from "@/assets/images/shopping-bag.png";
import { IProduct } from "@/interfaces/IProduct";
import { useShopCart } from "@/hooks/shopCart/useShopCart";
import { ImageComponent } from "@/components/ImageComponent/ImageComponent";
import { useProducts } from "@/hooks/products/useProducts";

interface ProductCardProps {
  product: IProduct;
  shopCart?: boolean;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, description, price, photo } = product;
  const { addProduct } = useShopCart();
  const { isLoading } = useProducts();

  const priceFormatted = `R$${Math.round(Number(price))}`;

  return (
    <AnimatePresence mode="wait">
      <CardContainer isLoading={!isLoading} data-testid="productCard">
        <CardContent>
          <CardImageContainer>
            <CardImage alt={`imagem do produto ${name}`} src={photo} />
          </CardImageContainer>

          <CardHeader>
            <CardTitle>{name}</CardTitle>

            <CardButtonsContainer>
              <CardButtonPrice>
                <CardPrice>
                  <span>{priceFormatted}</span>
                </CardPrice>
              </CardButtonPrice>
            </CardButtonsContainer>
          </CardHeader>

          <CardDescription>{description}</CardDescription>

          <CardButtonAdd onClick={() => addProduct(product)}>
            <ImageComponent src={bagIcon} alt="botão apra comprar produto" />
            Comprar
          </CardButtonAdd>
        </CardContent>
      </CardContainer>
    </AnimatePresence>
  );
};
