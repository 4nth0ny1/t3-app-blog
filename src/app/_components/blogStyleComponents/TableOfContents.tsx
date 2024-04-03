"use client"

function scrollYo(hash: string) {
  location.hash = "#" + hash;
}

interface SubHeadingProps {
  subs: {
    id: number;
    sub: string;
  }[];
}

export default function TableOfContents({ subs }: SubHeadingProps) {
  return (
    <div>
      {subs.map((sub) => {
        return (
          <ul key={sub.id}>
            <button onClick={() => scrollYo(sub.sub)}>{sub.sub}</button>
            <br></br>
          </ul>
        );
      })}
    </div>
  );
}
