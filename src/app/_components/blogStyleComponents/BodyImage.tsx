interface BodyImageProps {
  srcLink: string;
}

export default function BodyImage({ srcLink }: BodyImageProps) {
  return <img className="px-32 py-12" src={srcLink} />;
}
