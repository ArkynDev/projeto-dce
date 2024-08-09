import React, { useState } from 'react';
import './style.css';

export const ToggleMobileMenu = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }
    return(
        <div className="md:hidden lg:hidden sm:flex w-full items-center justify-between px-4 pt-4">
            <p>logo</p>
            <div>
                <input type="checkbox" name="checkbox" id="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="hidden" />
                <label className="toggle relative flex w-[40px] h-[40px] cursor-pointer flex-col items-center justify-center gap-[10px]" htmlFor="checkbox">
                    <div id="bar1" className="bars"></div>
                    <div id="bar2" className="bars"></div>
                    <div id="bar3" className="bars"></div>
                </label>
            </div>

            {isChecked && <div className='fixed bg-green-500 rounded-md p-8 right-[10px] top-[75px]'>
                <ul className="flex flex-col text-white gap-4">
                    <li className='hover:text-green-600'>Inicio</li>
                    <li className='hover:text-green-600'>Estudante</li>
                    <li className='hover:text-green-600'>Transparência</li>
                </ul>
            </div>}
        </div>
    )
}