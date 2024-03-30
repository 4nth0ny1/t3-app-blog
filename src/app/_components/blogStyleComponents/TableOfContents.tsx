function scrollYo(hash: string) {
  location.hash = "#" + hash;
}

export default function TableOfContents({ subs }) {
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
