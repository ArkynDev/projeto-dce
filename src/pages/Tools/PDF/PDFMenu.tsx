import { Button } from "../../../components/ui/Button";

export const PDFMenu = () => {
    return(
        <section className="flex h-screen">
            <div className="flex items-start justify-center h-full w-full py-32 gap-2">
                <Button className="p-8 bg-red-600 text-white hover:scale-105 min-h-28 min-w-44" rounded="simple" Justify="center" >Unir PDF</Button>
                <Button className="p-8 bg-red-600 text-white hover:scale-105 min-h-28 min-w-44" rounded="simple" Justify="center" >Comprimir<br />PDF</Button>
            </div>
        </section>
    )
};