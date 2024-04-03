import Link from "next/link";

interface LinkButtonProps {
  linkUrl: string;
  buttonText: string;
  buttonStyles: string;
}

export default function LinkButton({
  linkUrl,
  buttonText,
  buttonStyles,
}: LinkButtonProps) {
  return (
    <Link href={linkUrl}>
      <button className={`btn ${buttonStyles}`}>{buttonText}</button>
    </Link>
  );
}
