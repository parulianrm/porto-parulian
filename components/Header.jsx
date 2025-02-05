import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { FaCode } from "react-icons/fa";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="flex flex-row gap-2 text-4xl font-semibold">
                        Parulian
                        <span className="text-accent">
                            <FaCode />
                        </span>
                    </h1>
                </Link>

                {/* dekstop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
