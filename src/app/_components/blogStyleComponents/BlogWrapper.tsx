export default function BlogWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-[1200px]">{children}</div>;
}
