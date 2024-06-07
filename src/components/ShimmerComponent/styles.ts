import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem 1.5rem;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 13.625rem;
  height: 17.8125rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 1.5rem 1rem 0 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const CardImage = styled(motion.div).attrs(() => ({
  initial: {
    opacity: 0.7,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    opacity: {
      
      ease: "easeInOut",
      duration: 0.4,
      type: "tween",
      repeat: Infinity,
    },
  },
}))`
  width: 100%;
  height: 8.75rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background: #ccc;
  border-radius: 0.5rem;
`;

export const CardHeader = styled(motion.div).attrs(() => ({
  initial: {
    opacity: 0.7,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    opacity: {
      
      ease: "easeInOut",
      duration: 0.4,
      type: "tween",
      repeat: Infinity,
    },
  },
}))`
  width: 100%;
  height: 2.25rem;
  background: #ccc;
`;

export const CardDescription = styled(motion.div).attrs(() => ({
  initial: {
    opacity: 0.7,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    opacity: {
      
      ease: "easeInOut",
      duration: 0.4,
      type: "tween",
      repeat: Infinity,
    },
  },
}))`
  width: 11.5rem;
  height: 1.5rem;
  background: #ccc;
`;

export const CardButtonAdd = styled(motion.div).attrs(() => ({
  initial: {
    opacity: 0.7,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    opacity: {
      
      ease: "easeInOut",
      duration: 0.4,
      type: "tween",
      repeat: Infinity,
    },
  },
}))`
  width: 100%;
  height: 2rem;
  background: #ccc;
  position: absolute;
  bottom: 0;
`;
