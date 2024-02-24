import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  //   const { getUser } = getKindeServerSession();
  //   const user = getUser();
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="flex items-center">
              <img src="/m.jpg" alt="m" className="w-6 h-6 mr-1" />
              <span className="text-xl font-bold">MomentumX.</span>
            </span>
          </Link>

          {/* <MobileNav isAuth={!!user} /> */}

          <div className="hidden items-center space-x-4 sm:flex">
            {/* login logic */}
          </div>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
