import styled from "styled-components";
import { motion } from "framer-motion";

type ContainerProps = {
  isCartOpen: boolean;
};

const sideVariants = {
  closed: {
    width: 0,
    opacity: 0,
    padding: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    width: 485,
    opacity: 1,
    padding: "2.5rem 3rem 2.5rem 3rem",
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const CartContainer = styled(motion.aside).attrs<ContainerProps>(
  ({ isCartOpen }) => ({
    initial: "closed",
    animate: isCartOpen ? "open" : "closed",
    variants: sideVariants,
  })
)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: #0f52ba;
  z-index: 2;
  user-select: none;
  display: grid;
  grid-template-rows: 5rem 1fr 11.25rem;
`;

export const ShopcartContent = styled(motion.div).attrs<ContainerProps>(
  ({ isCartOpen }) => ({
    initial: "closed",
    animate: isCartOpen ? "open" : "closed",
    variants: sideVariants,
  })
)`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 2rem;
`;

export const ShopCartHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;

  h1 {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2rem;
    color: #ffffff;
    width: 10.375rem;
    user-select: none;
  }
`;

export const ButtonCloseCart = styled.button`
  border: none;
  outline: none;
  background-color: #000;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;

  span {
    font-weight: 400;
    font-size: 1.75rem;
    line-height: 1rem;
    color: #fff;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.75rem;
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding-top: 2rem;
`;

export const ShopCartFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 2rem;

  h1,
  span {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1rem;
    color: #ffffff;
  }
`;

export const ButtonCheckout = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  height: 4rem;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1rem;
    color: #ffffff;
  }
`;
