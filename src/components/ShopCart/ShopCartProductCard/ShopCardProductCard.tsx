import { IProduct } from "@/interfaces/IProduct";
import {
  Button,
  Buttons,
  Container,
  ImageContainer,
  Price,
  RemoveButton,
  Title,
} from "./styles";
import { ImageComponent } from "@/components/ImageComponent/ImageComponent";
import { useShopCart } from "@/hooks/shopCart/useShopCart";

type Props = {
  product: IProduct;
};

export const ShopCardProductCard = ({ product }: Props) => {
  const {
    products,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
    openShopCart,
  } = useShopCart();
  const { id, name, photo, quantity, price } = product;
  const priceFormatted = `R$${Math.round(Number(price))}`;
  const totalProductsQuantity = products.reduce((total, product) => {
    return total + Number(product.quantity);
  }, 0);

  function decrease() {
    decreaseProductQuantity(id);

    if (totalProductsQuantity === 1) {
      openShopCart();
    }
  }

  function increase() {
    increaseProductQuantity(id);
  }

  function removeProductFromCart() {
    removeProduct(id);

    if (products.length === 1) {
      openShopCart();
    }
  }

  return (
    <Container>
      <ImageContainer>
        <ImageComponent src={photo} alt={name} width={50} height={60} />
      </ImageContainer>

      <Title>{name}</Title>

      <Buttons>
        <Button onClick={decrease}>-</Button>
        <span>|</span>
        <span>{quantity}</span>
        <span>|</span>
        <Button onClick={increase}>+</Button>
      </Buttons>

      <Price>{priceFormatted}</Price>

      <RemoveButton onClick={removeProductFromCart}>
        <span>x</span>
      </RemoveButton>
    </Container>
  );
};
