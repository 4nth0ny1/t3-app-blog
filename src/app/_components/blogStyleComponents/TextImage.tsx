interface TextImageProps {
  halfParagraphText: string;
  srcLink: string;
  flexReverse?: boolean;
}

export default function TextImage({
  halfParagraphText,
  srcLink,
  flexReverse,
}: TextImageProps) {
  return (
    <div
      className={`flex max-h-96 w-full flex-row justify-center gap-8 ${
        flexReverse ? "flex-row-reverse" : ""
      }`}
    >
      <p className="w-1/2 text-xl">{halfParagraphText}</p>
      <img src={srcLink} className="w-1/2" />
    </div>
  );
}
