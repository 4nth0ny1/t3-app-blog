import Image from "next/image";

interface TextImageProps {
  halfParagraphText: string;
  srcLink: string;
  flexReverse?: boolean;
  addPadding?: string;
  title?: string;
}

export default function TextImage({
  title,
  addPadding,
  halfParagraphText,
  srcLink,
  flexReverse,
}: TextImageProps) {
  return (
    <div
      className={`flex max-h-96 w-full flex-row justify-center gap-8 ${
        flexReverse ? "flex-row-reverse" : ""
      } ${addPadding}`}
    >
      <div className="flex flex-col">
        <h2 className="pb-2 text-3xl">{title}</h2>
        <p className="text-xl">{halfParagraphText}</p>
      </div>
      <Image
        src={srcLink}
        className="w-1/2"
        width={1500}
        height={1500}
        alt=""
      />
    </div>
  );
}
