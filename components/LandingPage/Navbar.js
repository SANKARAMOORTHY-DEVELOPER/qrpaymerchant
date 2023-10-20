import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between">
        <div className="my-5 lg:my-6">
            <Image src="/images/logo.svg" height={160} width={160} alt="easybank logo" />
        </div>
        <div className="h-[50px] ">
        <Link href="/home">
        <button className="hidden h-full  lg:block bg-primary-lime-green rounded-full px-7  text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
            Launch App
        </button>
        </Link>

        </div>

    </div>
  );
}