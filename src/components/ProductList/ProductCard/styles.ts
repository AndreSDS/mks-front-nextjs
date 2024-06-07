import { motion } from "framer-motion";
import styled from "styled-components";

type ContainerProps = {
  isLoading: boolean;
};

const cardVariants = {
  open: {
    scale: [0, 1.2, 1],
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      staggerDirection: 1,
      type: "spring",
    },
  },
};

export const CardContainer = styled(motion.div).attrs<ContainerProps>(
  ({ isLoading }) => ({
    variants: cardVariants,
    initial: { scale: 0 },
    animate: isLoading && "open",
  })
)`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 0.5rem;
  width: 13.625rem;
  height: 17.8125rem;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  position: relative;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  height: 100%;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 8.75rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2.375rem;
  margin-top: 0.5rem;
`;

export const CardTitle = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #2c2c2c;
`;

export const CardDescription = styled.p`
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 0.75rem;
  color: #2c2c2c;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 5px;

  @media (min-width: 376px) {
    width: "8.75rem" : "4rem")};
    height: "1.875rem" : "auto")};
  }
`;

export const CardButtonPrice = styled.div`
  background-color: #373737;
  height: 1.875rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
`;

export const CardPrice = styled.span`
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
`;

export const CardButtonAdd = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  background: #0f52ba;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: #ffffff;
  outline: none;
  border: none;
  ring: 0;

  img {
    margin-right: 1rem;
  }

  &:hover {
    background: #0b48a8;
  }
`;
