import Image from "next/link";

interface BodyImageProps {
  srcLink: string;
}

export default function BodyImage({ srcLink }: BodyImageProps) {
  return (
    <Image
      width={50}
      height={50}
      className="px-32 py-12"
      src={srcLink}
      alt=""
    />
  );
}
