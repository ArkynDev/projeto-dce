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

    const scrolledClasses = isScrolled ? 'bg-gray-200 w-[50%] h-[40px] text-black' : 'bg-white h-[55px] w-[55%] text-black';

    const bntConfig = isScrolled ? 'h-8 w-8' : 'h-12 w-12';
    const btnIconConfig = isScrolled ? 'p-1' : 'p-0';
    const chevronConfig = isOpenTools ? 'rotate-0' : 'rotate-180';

    const toolsShow = isOpenTools ? 'oppenTools' : 'closseTools';
    const toolsConfig = isScrolled ? 'top-[45px]' : 'top-[60px]';

    return(
        <header className={`md:fixed lg:flex sm:hidden sticky top-[12px] left-[50%] translate-x-[-50%] rounded-full shadow-md transition-all duration-300 ${scrolledClasses}`}>
            <div className="flex items-center justify-between w-full h-full px-2 z-10">
                <a href="">Logo</a>
                <ul className="flex relative gap-4">
                    <li className="relative after:absolute after:bg-green-600 after:h-[3px] after:w-0 after:left-0 after:bottom-[-10px] after:rounded-lg hover:font-bold hover:after:w-full"><Link to={"/"}>Inicio</Link></li>
                    <li className="relative after:absolute after:bg-green-600 after:h-[3px] after:w-0 after:left-0 after:bottom-[-10px] after:rounded-lg hover:font-bold hover:after:w-full">Estudante</li>
                    <li className="relative after:absolute after:bg-green-600 after:h-[3px] after:w-0 after:left-0 after:bottom-[-10px] after:rounded-lg hover:font-bold hover:after:w-full">Transparência</li>
                    <li className="flex justify-center relative after:absolute after:bg-green-600 after:h-[3px] after:w-0 after:left-0 after:bottom-[-10px] after:rounded-lg hover:font-bold hover:after:w-full">
                        <Button children={<><ChevronDown className={`transition-all duration-300 ${chevronConfig}`} /> Ferramentas</>} onClick={toggleOpenTools} />
                        <ul className={`toolsMenu transition-all duration-300 gap-3 flex-col absolute ${toolsConfig} ${toolsShow}`}>
                            <li className="hover:bg-green-300 rounded-md text-center w-full py-1">
                                <Link to={"PDFMenu"}>PDF</Link>
                            </li>
                            <li className="hover:bg-green-300 rounded-md text-center w-full py-1">
                                Ferramenta 2
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="flex flex-col items-center relative">
                    <Button rounded="full" children={<MessageCircleMore className={`transition-all duration-300 ${btnIconConfig}`} />} className={`bg-green-400 transition-all duration-300 ${bntConfig} z-10`} />
                    <div className="flex flex-col absolute">
                        <Button rounded="full" children={<Instagram className={`transition-all duration-300 ${btnIconConfig}`} />} className={`bg-green-400 transition-all duration-300 ${bntConfig}`} />
                    </div>
                </div>
            </div>
        </header>
    )
}