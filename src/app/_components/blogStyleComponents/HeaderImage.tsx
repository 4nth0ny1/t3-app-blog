interface HeaderImageProps {
  srcLink: string;
}

export default function HeaderImage({ srcLink }: HeaderImageProps) {
  return <img className="py-12" src={srcLink} />;
}
