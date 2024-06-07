import { CartButtonContainer, CartButtonIcon } from "./styles";
import cartIcon from "../../../assets/images/cart.svg";
import { useShopCart } from "@/hooks/shopCart/useShopCart";

export const CartButton = () => {
  const { products, openShopCart } = useShopCart();

  const totalProductsInCart = products.length || 0;
  const disabled = totalProductsInCart === 0;

  return (
    <CartButtonContainer
      data-testid="cart-button"
      disabled={disabled}
      onClick={openShopCart}
    >
      <CartButtonIcon src={cartIcon} alt="Ícone do carrinho de compras" />
      {totalProductsInCart}
    </CartButtonContainer>
  );
};
