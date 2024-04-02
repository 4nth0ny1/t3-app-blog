interface SubHeadingProps {
  id?: string;
  subheading?: string;
}

export default function Subheading({ id, subheading }: SubHeadingProps) {
  return (
    <h2 id={id} className={`pb-2 pt-8 text-3xl ${subheading}`}>
      {subheading}
    </h2>
  );
}
