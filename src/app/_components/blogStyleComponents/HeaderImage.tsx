import Image from "next/link";

interface HeaderImageProps {
  srcLink: string;
}

export default function HeaderImage({ srcLink }: HeaderImageProps) {
  return (
    <Image width={1500} height={1500} alt="" className="py-12" src={srcLink} />
  );
}
