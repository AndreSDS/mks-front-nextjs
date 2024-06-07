"use client";
import { HeaderContainer } from "./styles";
import logo from "../../assets/images/logo.png";
import { CartButton } from "./CartButton/CartButton";
import { ImageComponent } from "../ImageComponent/ImageComponent";

export const Header = ({}) => {
  return (
    <HeaderContainer>
      <ImageComponent src={logo} alt="Logo da loja" />
      <CartButton />
    </HeaderContainer>
  );
};
