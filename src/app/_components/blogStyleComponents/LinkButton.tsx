import Link from "next/link";

interface LinkButtonProps {
  linkUrl: string;
  buttonText: string;
}

export default function LinkButton({ linkUrl, buttonText }: LinkButtonProps) {
  return (
    <Link href={linkUrl}>
      <button className="btn">{buttonText}</button>
    </Link>
  );
}
