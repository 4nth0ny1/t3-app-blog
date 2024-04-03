interface BulletsProps {
  bullets: {
    id: number;
    name: string;
  }[];
}

export default function BulletedList({ bullets }: BulletsProps) {
  return (
    <>
      {bullets.map((bullet) => {
        return (
          <li className="w-3/4 py-4 lg:w-full lg:indent-12" key={bullet.id}>
            {bullet.name}
          </li>
        );
      })}
    </>
  );
}
