import { useState, useEffect } from "react"

import { Button } from "./ui/Button";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fixedClasses = 'md:fixed lg:flex sm:hidden sticky top-[12px] left-[50%] translate-x-[-50%] rounded-full shadow-md transition-all duration-300';

    const scrolledClasses = isScrolled ? 'bg-gray-200 w-[50%] h-[40px] text-black' : 'bg-white h-[55px] w-[55%] text-green-600';

    return(
        <header className={`${fixedClasses} ${scrolledClasses}`}>
            <div className="flex items-center justify-between w-full h-full px-4">
                <a href="">Logo</a>
                <ul className="flex gap-4">
                    <li className="hover:text-green-600">Inicio</li>
                    <li className="hover:text-green-600">Estudante</li>
                    <li className="hover:text-green-600">Transparência</li>
                </ul>
                <Button children='Oi' className="bg-green-400" />
            </div>
        </header>
    )
}