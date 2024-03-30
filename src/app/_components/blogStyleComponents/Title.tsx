interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1 className="py-12 text-center text-5xl">{title}</h1>;
}
