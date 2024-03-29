interface SubHeadingProps {
  subheading: string;
}

export default function Subheading({ subheading }: SubHeadingProps) {
  return <h2 className="pb-2 pt-8 text-3xl">{subheading}</h2>;
}
