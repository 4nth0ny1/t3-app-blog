export default function BlogWrapper({
  addPadding,
  children,
}: {
  addPadding?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-[1200px] ${addPadding}`}>{children}</div>
  );
}
