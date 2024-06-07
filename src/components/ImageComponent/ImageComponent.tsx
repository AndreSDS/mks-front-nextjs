import Image, { ImageProps, StaticImageData } from "next/image";

interface Props extends ImageProps {
  src: StaticImageData | string;
  alt: string;
}

export const ImageComponent = ({ src, alt, ...rest }: Props) => {
  return <Image src={src} alt={alt} {...rest} />;
};
