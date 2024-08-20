import { Link } from "react-router-dom";

import { Button } from "../../../components/ui/Button";

import './style.css';

export const PDFMenu = () => {
    return(
        <section className="flex h-screen">
            <div className="flex items-start justify-center h-full w-full py-32 gap-2">
                <Button className="bg-red-600 text-white hover:scale-105 hover:z-[1] h-28 w-44 textHolder" rounded="simple" Justify="center" ><Link to={"/MergPDF"} className="cardPDF">Unir PDF</Link></Button>
                <Button className="bg-red-600 text-white hover:scale-105 hover:z-[1] h-28 w-44 textHolder" rounded="simple" Justify="center" >Comprimir<br />PDF</Button>
            </div>
        </section>
    )
};