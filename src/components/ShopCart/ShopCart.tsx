"use client";
import {
  CartContainer,
  ButtonCloseCart,
  ShopCartHeader,
  Content,
  ShopCartFooter,
  TotalPrice,
  ButtonCheckout,
} from "./styles";
import { useShopCart } from "@/hooks/shopCart/useShopCart";
import { ShopCardProductCard } from "./ShopCartProductCard/ShopCardProductCard";

export const ShopCart = () => {
  const { products, iscartopen, clearProducts, openShopCart } = useShopCart();
  const totalPrice = products.reduce((total, product) => {
    return total + Number(product.price) * (product.quantity || 1);
  }, 0);

  function finishShopping() {
    clearProducts();
    openShopCart();
  }

  return (
    <>
      <CartContainer isCartOpen={iscartopen}>
        <ShopCartHeader>
          <h1>Carrinho de compras</h1>

          <ButtonCloseCart data-testid="close-shopCart" onClick={openShopCart}>
            <span>x</span>
          </ButtonCloseCart>
        </ShopCartHeader>

        <Content>
          {products.map((product) => (
            <ShopCardProductCard key={product.id} product={product} />
          ))}
        </Content>

        <ShopCartFooter>
          <TotalPrice>
            <h1>Total:</h1>
            <span>R${totalPrice}</span>
          </TotalPrice>

          <ButtonCheckout onClick={finishShopping}>
            <p>Finalizar compra</p>
          </ButtonCheckout>
        </ShopCartFooter>
      </CartContainer>
    </>
  );
};
