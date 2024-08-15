import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import { Button } from "../ui/Button";
import { MessageCircleMore, ChevronDown, Instagram } from 'lucide-react';

import './style.css';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenTools, setIsOpenTools] = useState(false);

    const toggleOpenTools = () => {
        setIsOpenTools(prevState => !prevState);
    };

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

    const scrolledClasses = isScrolled ? 'bg-gray-200 w-[50%] h-[40px] text-black' : 'bg-white h-[55px] w-[55%] text-black';

    const btnFixed = 'bg-green-400 transition-all duration-300';
    const bntConfig = isScrolled ? 'h-8 w-8' : 'h-12 w-12';
    const btnPrincipal = 'z-10';

    const btnIcon = 'transition-all duration-300';
    const btnIconConfig = isScrolled ? 'p-1' : 'p-0';

    const chevron = 'transition-all duration-300';
    const chevronConfig = isOpenTools ? 'rotate-0' : 'rotate-180';

    const toolsShow = isOpenTools ? 'oppenTools' : 'closseTools';

    return(
        <header className={`${fixedClasses} ${scrolledClasses}`}>
            <div className="flex items-center justify-between w-full h-full px-2 z-10">
                <a href="">Logo</a>
                <ul className="flex relative gap-4">
                    <li className="hover:text-green-600 durat"><Link to={"/"}>Inicio</Link></li>
                    <li className="hover:text-green-600">Estudante</li>
                    <li className="hover:text-green-600">Transparência</li>
                    <li className="flex justify-center">
                        <Button className="hover:text-green-600" children={<><ChevronDown className={`${chevron} ${chevronConfig}`} /> Ferramentas</>} onClick={toggleOpenTools} />
                        <ul className={`${toolsShow} flex-col absolute items-center top-[60px] bg-white shadow-md px-4 py-3 ring-1 ring-green-600 rounded-lg`}>
                            <li className="hover:text-green-600"><Link to={"PDFMenu"}>PDF</Link></li>
                        </ul>
                    </li>
                </ul>
                <div className="flex flex-col items-center relative">
                    <Button rounded="full" children={<MessageCircleMore className={`${btnIcon} ${btnIconConfig}`} />} className={`${btnFixed} ${bntConfig} z-10`} />
                    <div className="flex flex-col absolute">
                        <Button rounded="full" children={<Instagram className={`${btnIcon} ${btnIconConfig}`} />} className={`${btnFixed} ${bntConfig}`} />
                    </div>
                </div>
            </div>
        </header>
    )
}