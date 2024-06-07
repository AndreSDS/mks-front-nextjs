import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: -2px 2px 0.625rem rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 23.75rem;
  height: 6rem;
  user-select: none;
`;

export const ImageContainer = styled.div`
  width: 3.25rem;
  height: 3.75rem;
  overflow: hidden;

  img {
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #2c2c2c;
  max-width: 7.875rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 3.5rem;
  height: 1.35rem;
  border-radius: 0.25rem;
  border: 1px solid #bfbfbf;

  span {
    font-weight: 400;
    font-size: 0.75rem;
    color: #000;
  }
`;

export const Button = styled.span`
  cursor: pointer;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #000;
`;

export const RemoveButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  width: 1.25rem;
  background-color: #000;
  color: #fff;
  border: none;
  outline: onne;
  cursor: pointer;
  border-radius: 50%;
  top: -5px;
  right: -5px;

  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;
    margin-top: -3px;
  }
`;
