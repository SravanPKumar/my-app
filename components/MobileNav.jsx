"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from "./ui/button";

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-8 text-center text-2xl">
                    <Link href="/" className="text-4xl font-semibold">
                        Sravan<span className="text-accent">.</span>
                    </Link>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-6">
                    {links.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.path} 
                            className={`text-xl capitalize transition-all ${link.path === pathname ? 'text-accent border-b-2 border-accent' : 'hover:text-accent'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                {/* Hire Me Button */}
                <div className="mt-auto mb-8 flex justify-center">
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
