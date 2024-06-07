import styled from "styled-components";
import Image from "next/image";

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.625rem;
  height: 3rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #000;

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    opacity: 0.5;
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const CartButtonIcon = styled(Image)`
  width: 1rem;
  height: 1.5rem;
  margin-right: 1rem;
`;
