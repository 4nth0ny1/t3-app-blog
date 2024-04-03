interface H3HeadingProps {
  heading: string;
}

export default function H3Heading({ heading }: H3HeadingProps) {
  return <h3 className="text-2xl italic">{heading}</h3>;
}
