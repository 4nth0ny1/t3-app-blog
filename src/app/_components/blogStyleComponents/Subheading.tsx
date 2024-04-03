interface SubHeadingProps {
  id?: string;
  subheading?: string;
  numberOfItem?: number;
}

export default function Subheading({
  id,
  subheading,
  numberOfItem,
}: SubHeadingProps) {
  return (
    <h2 id={id} className={`pb-2 pt-8 text-3xl ${subheading}`}>
      {numberOfItem && `${numberOfItem}. `}
      {subheading}
    </h2>
  );
}
