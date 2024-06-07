"use client";

import { ProductCard } from "./ProductCard/ProductCard";
import { ShimmerComponent } from "../ShimmerComponent/ShimmerComponent";
import { Container } from "./styles";
import { useProducts } from "@/hooks/products/useProducts";

export const ProductList = () => {
  const { products, isLoading } = useProducts();
  return (
    <>
      {isLoading ? (
        <ShimmerComponent length={8} />
      ) : (
        <Container>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      )}
    </>
  );
};
