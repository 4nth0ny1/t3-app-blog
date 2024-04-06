import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: number;
  imgUrl: string;
  imgAlt: string;
  title: string;
  newBlog: boolean;
  description: string;
  tagArray: { id: number; name: string }[];
  linkUrl: string;
}

export default function Card({
  id,
  imgUrl,
  imgAlt,
  title,
  newBlog,
  description,
  tagArray,
  linkUrl,
}: CardProps) {
  return (
    <Link href={linkUrl}>
      <div className="card max-w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={imgUrl}
            alt={imgAlt}
            width={300}
            height={300}
            className="h-[200px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            {newBlog && (
              <div className="badge badge-secondary">{newBlog && "NEW"}</div>
            )}
          </h2>
          <p>{description}</p>
          {tagArray?.map((tag) => {
            return (
              <div className="card-actions justify-end" key={tag.id}>
                <div className="badge badge-outline">{tag.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
