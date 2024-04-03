import Image from "next/image";

interface TextImageProps {
  halfParagraphText: string;
  srcLink: string;
  flexReverse?: boolean;
  addPadding?: string;
  title?: string;
  altTag: string;
}

export default function TextImage({
  title,
  addPadding,
  halfParagraphText,
  srcLink,
  flexReverse,
  altTag,
}: TextImageProps) {
  return (
    <div
      className={`flex w-full flex-col flex-col-reverse justify-center gap-8 px-4 lg:max-h-96 lg:flex-row lg:px-0 ${
        flexReverse ? "lg:flex-row-reverse" : ""
      } ${addPadding}`}
    >
      <div className="flex flex-col">
        <h2 className="pb-2 text-3xl">{title}</h2>
        <p className="text-xl">{halfParagraphText}</p>
      </div>
      <Image
        src={srcLink}
        className="lg:w-1/2"
        width={1500}
        height={1500}
        alt={altTag}
      />
    </div>
  );
}
