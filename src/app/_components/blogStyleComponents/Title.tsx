interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h2 className="py-12 text-center text-4xl">{title}</h2>;
}
