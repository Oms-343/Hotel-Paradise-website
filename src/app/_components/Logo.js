import Image from "next/image";
import icon from "@/public/icon.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={icon}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={100}
      />
      <span className="text-xl font-semibold text-primary-100">
        Hotel Paradise
      </span>
    </Link>
  );
}

export default Logo;
