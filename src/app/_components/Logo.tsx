import Image from "next/image";

export default function Logo() {
  return (
    <Image
      width={50}
      height={50}
      alt="Golf Kept Simple Logo"
      src="/logo-golf-kept-simple.png"
    />
  );
}
