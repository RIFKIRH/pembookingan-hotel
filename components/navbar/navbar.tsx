import Image from "next/image";
import Link from "next/link";
import Navlink from "@/components/navbar/navlink";
const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 w-full bg-white shadow-sm z-20">
        <div className="max-width-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={128}
              height={49}
              priority
            />
          </Link>
          <Navlink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
