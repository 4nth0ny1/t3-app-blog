interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  return <p className="py-2 text-xl">{paragraph}</p>;
}
