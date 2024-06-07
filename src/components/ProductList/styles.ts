import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem 2rem;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
