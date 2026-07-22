import { Image } from "./styles";

const Index = ({ src, alt, width, height, onClick }: ImageProps) => {
  const imgUrl = (src: string) => {
    return `${import.meta.env.VITE_API_UPLOADS!}/${src}`;
  };

  return <Image src={imgUrl(src)} alt={alt} width={width} height={height} onClick={onClick} />;
};

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  alt?: string;
}

export default Index;
