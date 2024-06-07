"use client";
import {
  Container,
  Card,
  CardImage,
  CardHeader,
  CardDescription,
  CardButtonAdd,
} from "./styles";

type ShimmerComponentProps = {
  length?: number;
};

export const ShimmerComponent = ({ length }: ShimmerComponentProps) => {
  const shimmerPrducts = Array.from({ length: length || 4 });

  return (
    <Container>
      {shimmerPrducts.map((_, index) => (
        <Card key={index}>
          <CardImage />
          <CardHeader />
          <CardDescription />
          <CardButtonAdd />
        </Card>
      ))}
    </Container>
  );
};
