import Link from "next/link";

interface SubHeadingProps {
  id?: string;
  subheading?: string;
  numberOfItem?: number;
  linkTrue?: boolean;
  linkUrl?: string;
}

export default function Subheading({
  id,
  subheading,
  numberOfItem,
  linkTrue,
  linkUrl,
}: SubHeadingProps) {
  return (
    <h2 id={id} className={`pb-2 pt-8 text-3xl ${subheading}`}>
      {numberOfItem && `${numberOfItem}. `}
      {linkTrue ? (
        <Link href={linkUrl}>{subheading}</Link>
      ) : (
        <span>{subheading}</span>
      )}
    </h2>
  );
}
