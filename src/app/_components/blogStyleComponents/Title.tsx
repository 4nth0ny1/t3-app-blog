interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-row text-center lg:text-start">
      <div className="lg:w-1/5"></div>
      <h1 className="py-12 text-5xl lg:w-4/5">{title}</h1>
    </div>
  );
}
